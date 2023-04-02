#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const { readFile, writeFile } = require("fs/promises");

const PACKAGE_NAME = "nextjs-graphql-tailwind-ts";
const GIT_REPO = `git@github.com:reactivers/${PACKAGE_NAME}.git`;

const checkInputs = () => {
  if (process.argv.length < 3) {
    console.log("You have to provide a name to your app.");
    console.log("For example :");
    console.log(`     npx @reactivers/${PACKAGE_NAME} my-app`);
    process.exit(1);
  }
};

const parseInputs = () => {
  const projectName = process.argv[2];
  const currentPath = process.cwd();
  const projectPath = path.join(currentPath, projectName);

  return { projectName, projectPath };
};

const createProjectFolder = (projectPath, projectName) => {
  try {
    fs.mkdirSync(projectPath);
  } catch (err) {
    if (err.code === "EEXIST") {
      console.log(
        `The file ${projectName} already exist in the current directory, please give it another name.`,
      );
    } else {
      console.log(error);
    }
    process.exit(1);
  }
};

const cloneRepo = (projectPath) => {
  console.log("Downloading files...");
  execSync(`git clone --depth 1 ${GIT_REPO} ${projectPath}`);
  process.chdir(projectPath);
};

const installDependencies = () => {
  console.log("Installing dependencies...");
  execSync("npx yarn install --frozen-lockfile --network-timeout 100000");
};

const removeExtraFiles = async (projectName, projectPath) => {
  console.log("Removing useless files");
  fs.rmSync(path.join(projectPath, "bin"), { recursive: true });
  fs.rmSync(path.join(projectPath, ".git"), { recursive: true });
  let packageJSONData = await readFile(path.join(projectPath, "package.json"));
  const packageJSON = JSON.parse(packageJSONData);
  packageJSON.name = projectName;
  packageJSON.version = "1.0.0";
  packageJSON.description = `Created with @reactivers/${PACKAGE_NAME}`;
  delete packageJSON["keywords"];
  delete packageJSON["bugs"];
  delete packageJSON["homepage"];
  delete packageJSON["repository"];
  delete packageJSON["bin"];
  packageJSONData = JSON.stringify(packageJSON, null, 2);
  await writeFile(path.join(projectPath, "package.json"), packageJSONData);
};

async function main() {
  try {
    checkInputs();
    const { projectName, projectPath } = parseInputs();
    createProjectFolder(projectPath, projectName);
    cloneRepo(projectPath);
    await removeExtraFiles(projectName, projectPath);
    installDependencies();
    console.log("The installation is done, this is ready to use !");
  } catch (error) {
    console.log(error);
  }
}

main();
