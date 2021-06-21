import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql
} from "@apollo/client";

import { useState } from "react";


export const client = new ApolloClient({
  uri: 'https://graphql-pokemon2.vercel.app/',
  cache: new InMemoryCache()
});


export function PokemonProvider({children}){
  
  return(
    <ApolloProvider  client={client}>
      {children}
    </ApolloProvider>
    )

}
