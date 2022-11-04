const { ApolloServer } = require("apollo-server");
const { products, categories } = require("./db");
const { typeDefs } = require("./schema");
const { Category } = require("./resolvers/Category");
const { Query } = require("./resolvers/Query");
const { Product } = require("./resolvers/Product");

const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Category,
      Product,
    },
});

server
 .listen()
 .then(({ url }) => {
  console.log(`Server ready at ${url}`);
 })
 .catch((err) => {
  console.log(err);
 });