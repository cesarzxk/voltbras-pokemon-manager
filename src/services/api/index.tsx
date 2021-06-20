import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";


export const client = new ApolloClient({
  uri: 'https://graphql-pokemon2.vercel.app/',
  cache: new InMemoryCache()
});

export function ApolloRequest({children}){
  return(
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
    )

}
