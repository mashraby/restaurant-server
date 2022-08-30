const { gql } = require("apollo-server")

module.exports = gql`
    type Admin {
        id: ID!
        username: String!
        password: String!
        acces_token: String!
    }

    extend type Query {
        admins: [Admin!],
        login(username: String! password: String!): Admin!
    }
`