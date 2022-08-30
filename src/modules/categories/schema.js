const { gql } = require("apollo-server");

module.exports = gql`
  type Categorie {
    id: ID!
    name: String!
    img_url: String!
  }

  extend type Query {
    categories: [Categorie!]
  }

  extend type Mutation {
    newCategorie(name: String!, img_url: String!): Categorie!
    deleteCategorie(id: ID!): Categorie!
  }
`;
