import { ApolloServer, gql } from "apollo-server-micro";

const data = [
  {
    id: "1",
    title: "Item #1",
    url: "https://vercel.com",
  },
  {
    id: "2",
    title: "Item #2",
    url: "https://google.com",
  },
  {
    id: "3",
    title: "Item #3",
    url: "https://aws.com",
  },
];

const typeDefs = gql`
  type Item {
    id: String!
    title: String!
    url: String!
  }

  type Query {
    items: [Item]
    item(id: String!): Item
  }
`;

const resolvers = {
  Query: {
    items: () => data,
    item: (_, args, context) => data.find((d) => d.id == args.id),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const handler = server.createHandler({ path: "/api/graphql" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
