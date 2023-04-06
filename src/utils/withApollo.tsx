import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client";
import { addHeaders, getApiClient, removeHeaders } from "apollo/client";
import { NextPage } from "next";
import nextWithApollo from "next-with-apollo";
import { useRouter } from "next/router";
import { FC, useCallback, useState } from "react";
import { TOKEN_KEY_NAME } from "./constants";
import { isBrowser } from "./functions";

const initialHeaders = isBrowser()
  ? {
      //...yourInitialHeaders
    }
  : {};

const withApollo = nextWithApollo(
  ({ initialState }) => {
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
    render: ({ Page, props }) => <ApolloRenderer Page={Page} {...props} />,
  },
);

const ApolloRenderer: FC<{
  Page: NextPage<{
    apollo: ApolloClient<NormalizedCacheObject>;
    addHeadersToApiClient: ({ headers }: { headers: object }) => void;
    removeHeadersFromApiClient: ({ headers }: { headers: string[] }) => void;
  }>;
  apollo: ApolloClient<NormalizedCacheObject>;
}> = ({ apollo, Page, ...rest }) => {
  const [appApiClient, setAppApiClient] = useState(apollo);

  const addHeadersToApiClient = useCallback(
    ({ headers }: { headers: object }) => {
      const newApiClient = addHeaders({ headers });
      setAppApiClient(newApiClient);
    },
    [],
  );

  const removeHeadersFromApiClient = useCallback(
    ({ headers }: { headers: string[] }) => {
      const newApiClient = removeHeaders({ headers });
      setAppApiClient(newApiClient);
    },
    [],
  );

  const router = useRouter();
  return (
    <ApolloProvider client={appApiClient}>
      <Page
        {...rest}
        apollo={appApiClient}
        addHeadersToApiClient={addHeadersToApiClient}
        removeHeadersFromApiClient={removeHeadersFromApiClient}
        {...router}
      />
    </ApolloProvider>
  );
};

export default withApollo;
