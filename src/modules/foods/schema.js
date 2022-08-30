const { gql } = require("apollo-server");

module.exports = gql`
  type Food {
    id: ID!
    name: String!
    price: String!
    img_url: String!
  }

  extend type Query {
    foodsAll: [Food!]
    foods(restaurant_id: ID!): [Food!]
  }

  extend type Mutation {
    newFood(name: String!, price: String!, img_url: String!, rstId: ID!): Food!
    deleteFood(id: ID!): Food!
  }
`;
