const { gql } = require("apollo-server");

//String, Int, Float, Boolean, ID!

exports.typeDefs = gql`
    type Query {
        hello: String! #It can not be a null value
        greetings: [String]
        numberOfAnimals: Int #It can be a null value
        price: Float
        isCool: Boolean
        products: [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
    }

    type Product{
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        image: String
        onSale: Boolean!
        category: Category
    }

    type Category {
        name: String!
        id: ID!
        products: [Product!]!
    }
`;