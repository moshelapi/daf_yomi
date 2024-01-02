export const usersTypeDefs = `#graphql

  type User {
    id: ID
    firstName: String!
    lastName: String!
    image: String
    email: String!
    password: String!
    latitude: Float!
    longitude: Float!
    time: String!
    title: String!
    city: String!
    street: String!
    age: Int!
  }
  input InputUser  {
    firstName: String!
    lastName: String!
    image: String
    email: String!
    password: String!
    latitude: Float!
    longitude: Float!
    time: String!
    title: String!
    city: String!
    street: String!
    age: Int!
  }

  type Query {
    users: [User]!
  }

  type Mutation {
    addUser(user:InputUser):String

  }
`;
//# sourceMappingURL=users.typeDeps.js.map