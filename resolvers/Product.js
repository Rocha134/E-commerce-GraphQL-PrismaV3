exports.Product = {
    category: ({categoryId}, args, {categories}/*The Categories from the context*/) => {
      //Return the category associated with the products (Many to One)
      //const categories = context.categories
      //const categoryId = parent.categoryId;
      return categories.find((category) => category.id === categoryId);
    },

    reviews: ({ id }, args, { reviews }) => {
      return reviews.filter((review) => review.productId === id);
    }
  };