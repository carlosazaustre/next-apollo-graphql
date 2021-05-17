import { ApolloClient, InMemoryCache } from "@apollo/client";

const URI =
  process.env.NEXT_PUBLIC_GRAPHQL_API || "http://localhost:3000/api/graphql";

const client = new ApolloClient({
  uri: URI,
  cache: new InMemoryCache(),
});

export default client;
