const { gql } = require("apollo-server");

module.exports = gql`
  type Order {
    id: ID!
    client: String!
    location: String!
    phone: String!
    purchase: String!
    time: String!
  }

  extend type Query {
    orders: [Order!]
  }

  extend type Mutation {
    createOrder(
      client: String!
      location: String!
      phone: String!
      purchase: String!
      time: String!
    ): Order!
  }
`;
