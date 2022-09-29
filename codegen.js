const { config } = require("dotenv");
const APP_ENV = process.env.APP_ENV;
config({
  path: `./environments/.env.${APP_ENV}`,
});

const IS_SECURE = process.env.NEXT_PUBLIC_SECURE === "true";
const securePart = IS_SECURE ? "s" : "";
const HASURA_HOST = `http${securePart}://${process.env.NEXT_PUBLIC_API_HOST}`;
console.log("HASURA_HOST", HASURA_HOST);

module.exports = {
  schema: [
    {
      [`${HASURA_HOST}`]: {},
    },
  ],
  documents: [
    "./src/graphql/*.gql",
    "./src/graphql/*.graphql",
    "./src/graphql/*/*.graphql",
    "./apps/*/*.graphql",
  ],
  overwrite: true,
  generates: {
    "./src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        reactApolloVersion: 3,
        withHooks: true,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
