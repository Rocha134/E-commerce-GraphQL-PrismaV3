const { gql } = require("apollo-server");

//String, Int, Float, Boolean, ID!

exports.typeDefs = gql`

    #---Query---
    type Query {
        #products: [Product!]!
        getProduct(id: ID!): Product
        getCategories: [Category!]!
        getCategory(id: ID!): Category
        getProducts(filter: ProductsFilterInput): [Product!]!
    }

    #---Payloads---

    type ProductPayload {
        product: Product
    }

    type ProductsPayload {
        products: [Product!]!
    }

    type CategoryPayload {
        category: Category
    }

    type CategoriesPayload {
        categories: [Category!]!
    }

    #---Mutations---
    type Mutation {
        addCategory(input: AddCategoryInput!): Category!
        addProduct(input: AddProductInput!): Product!
        addReview(input: AddReviewInput!): Review!
        deleteCategory(id: ID!): Boolean!
        deleteProduct(id: ID!): Boolean!
        deleteReview(id: ID!): Boolean!
        updateCategory(input: UpdateCategoryInput!): Category!
    }

    #---Inputs---

    input ProductsFilterInput {
        onSale: Boolean
        avgRating: Int
    }

    input AddCategoryInput {
        name: String!
    }

    input AddProductInput{
        name: String!
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        onSale: Boolean!
        categoryId: String!
    }

    input AddReviewInput{
        date: String!
        title: String!
        comment: String!
        rating: Int!
        productId: ID!
    }

    input UpdateCategoryInput {
        id: ID!
        name: String
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