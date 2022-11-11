exports.Product = {
    category: ({categoryId}, args, {db}/*The Categories from the context*/) => {
      //Return the category associated with the products (Many to One)
      //const categories = context.categories
      //const categoryId = parent.categoryId;
      return db.categories.find((category) => category.id === categoryId);
    },

    reviews: ({ id }, args, { db }) => {
      return db.reviews.filter((review) => review.productId === id);
    }
  };