import { ApolloProvider } from "@apollo/client";
import { addHeaders, getApiClient, removeHeaders } from "apollo/client";
import nextWithApollo from "next-with-apollo";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { TOKEN_KEY_NAME } from "./constants";
import { isBrowser } from "./functions";

let initialHeaders = isBrowser()
  ? {
      //...yourInitialHeaders
    }
  : {};

const withApollo = nextWithApollo(
  ({ initialState, headers }) => {
    const apiClient = getApiClient(initialState, {
      ...initialHeaders,
      ...(isBrowser() && !!localStorage.getItem(TOKEN_KEY_NAME)
        ? {
            Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY_NAME)}`,
          }
        : {}),
    });
    return apiClient;
  },
  {
    render: ({ Page, props }) => {
      const [appApiClient, setAppApiClient] = useState(props.apollo);

      const addHeadersToApiClient = useCallback(
        ({ headers }: { headers: object }) => {
          const newApiClient = addHeaders({ headers });
          setAppApiClient(newApiClient);
        },
        []
      );

      const removeHeadersFromApiClient = useCallback(
        ({ headers }: { headers: string[] }) => {
          const newApiClient = removeHeaders({ headers });
          setAppApiClient(newApiClient);
        },
        []
      );

      const router = useRouter();
      return (
        <ApolloProvider client={appApiClient}>
          <Page
            {...props}
            apollo={appApiClient}
            addHeadersToApiClient={addHeadersToApiClient}
            removeHeadersFromApiClient={removeHeadersFromApiClient}
            {...router}
          />
        </ApolloProvider>
      );
    },
  }
);

export default withApollo;
