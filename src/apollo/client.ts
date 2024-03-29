import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";
import { GQL_HTTP_API, GQL_WS_API } from "utils/constants";
import { isBrowser } from "utils/functions";

let initialHeaders: Record<string, string> = isBrowser() ? {} : {};
const httpLink = ({ headers }: { headers?: object } = {}) =>
  new HttpLink({
    uri: GQL_HTTP_API,
    headers: {
      ...headers,
    },
  });

const wsLink = ({ headers = {} }: { headers?: object } = {}) =>
  typeof window !== "undefined"
    ? new GraphQLWsLink(
        createClient({
          url: GQL_WS_API,
          shouldRetry: () => true,
          connectionParams: () => ({
            headers: {
              ...headers,
            },
          }),
        }),
      )
    : null;

const splitLink = (params?: object) => {
  if (isBrowser()) {
    const wslink = wsLink(params);
    if (wslink !== null) {
      return split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          );
        },
        wslink,
        httpLink(params),
      );
    }
  }
  return httpLink(params);
};

const createApiClient = () =>
  new ApolloClient({
    link: splitLink({ headers: initialHeaders }),
    ssrMode: isBrowser(),
    cache: new InMemoryCache(),
  });

let apiClient = createApiClient();

const getApiClient = (initialState = {}, headers = {}) => {
  initialHeaders = { ...initialHeaders, ...headers };
  apiClient.setLink(splitLink({ headers: initialHeaders }));
  apiClient.restore(initialState);
  return apiClient;
};

const addHeaders = ({ headers } = { headers: {} }) => {
  initialHeaders = { ...initialHeaders, ...headers };
  const newApiClient = createApiClient();
  newApiClient.setLink(splitLink({ headers: initialHeaders }));
  apiClient = newApiClient;
  return newApiClient;
};

const removeHeaders = (
  { headers }: { headers: string[] } = { headers: [] },
) => {
  headers.forEach((header) => {
    delete initialHeaders[header];
  });
  const newApiClient = createApiClient();
  newApiClient.setLink(splitLink({ headers: initialHeaders }));
  apiClient = newApiClient;
  return newApiClient;
};

export { getApiClient, addHeaders, removeHeaders };
