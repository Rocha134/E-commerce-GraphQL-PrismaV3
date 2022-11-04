const { categories } = require("../db");

exports.Product = {
    category: (parent, args, context) => {
      //Return the category associated with the products (Many to One)
      const categoryId = parent.categoryId;
      return categories.find((category) => category.id === categoryId);
    },
  };