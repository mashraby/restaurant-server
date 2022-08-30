const { gql } = require("apollo-server");

module.exports = gql`
  type Restaurant {
    id: ID!
    name: String!
    img_url: String!
  }

  extend type Query {
    restaurantsAll: [Restaurant!]
    restaurants(categorie_id: ID!): [Restaurant!]
  }

  extend type Mutation {
    newRestaurant(name: String!, img_url: String!, ctgId: ID!): Restaurant!
    deleteRestaurant(id: ID!): Restaurant!
  }
`;
