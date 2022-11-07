const { gql } = require("apollo-server");

//String, Int, Float, Boolean, ID!

exports.typeDefs = gql`
    type Query {
        price: Float
        #products: [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
        products(filter: ProductsFilterInput): [Product!]!
    }

    input ProductsFilterInput {
        onSale: Boolean
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
        reviews: [Review!]!
    }

    type Category {
        name: String!
        id: ID!
        products: [Product!]!
    }

    type Review {
        id: ID!
        date: String!
        title: String!
        comment: String!
        rating: Int!
    }
`;