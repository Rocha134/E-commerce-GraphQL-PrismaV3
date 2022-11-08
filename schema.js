const { gql } = require("apollo-server");

//String, Int, Float, Boolean, ID!

exports.typeDefs = gql`

    #---Query---
    type Query {
        #products: [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
        products(filter: ProductsFilterInput): [Product!]!
    }

    #---Inputs---

    input ProductsFilterInput {
        onSale: Boolean
    }

    #---Types---

    type Product{
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        image: String
        onSale: Boolean!
        category: Category
        reviews: [Review!]!
    }

    type Category {
        name: String!
        id: ID!
        products(filter: ProductsFilterInput): [Product!]!
    }

    type Review {
        id: ID!
        date: String!
        title: String!
        comment: String!
        rating: Int!
    }
`;