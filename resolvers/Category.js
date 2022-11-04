exports.Category = {
    products: ({id: categoryId}/*WE GET the id from the parent and we rename it to categoryId */, args, {products}) => {
       //Return the products for that specific category (One to Many)
       //console.log(parent);
       //const categoryId = parent.id;
       return products.filter((product) => product.categoryId === categoryId);
    }
  };