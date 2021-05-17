import { ApolloClient, InMemoryCache } from "@apollo/client";

const URI = process.env.GRAPHQL_API_HOST || "http://localhost:3000/api/graphql";

const client = new ApolloClient({
  uri: URI,
  cache: new InMemoryCache(),
});

export default client;
