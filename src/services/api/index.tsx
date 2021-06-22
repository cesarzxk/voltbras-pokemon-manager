import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";


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
