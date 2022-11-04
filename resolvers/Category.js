const { products } = require("../db");

exports.Category = {
    products: (parent, args, context) => {
       //Return the products for that specific category (One to Many)
       //console.log(parent);
       const categoryId = parent.id;
       return products.filter((product) => product.categoryId === categoryId);
    }
  };