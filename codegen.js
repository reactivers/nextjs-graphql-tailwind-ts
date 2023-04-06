import { config } from "dotenv";
const APP_ENV = process.env.APP_ENV;
config({
  path: `./environments/.env.${APP_ENV}`,
});

const IS_SECURE = process.env.NEXT_PUBLIC_SECURE === "true";
const securePart = IS_SECURE ? "s" : "";
const GRAPHQL_HOST = `http${securePart}://${process.env.NEXT_PUBLIC_API_HOST}`;

export const schema = [
  {
    [`${GRAPHQL_HOST}`]: {},
  },
];
export const documents = [
  "./src/graphql/*.gql",
  "./src/graphql/*.graphql",
  "./src/graphql/*/*.graphql",
  "./apps/*/*.graphql",
];
export const overwrite = true;
export const generates = {
  "./src/generated/graphql.tsx": {
    plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
    config: {
      skipTypename: false,
      reactApolloVersion: 3,
      withHooks: true,
    },
  },
  "./graphql.schema.json": {
    plugins: ["introspection"],
  },
};
