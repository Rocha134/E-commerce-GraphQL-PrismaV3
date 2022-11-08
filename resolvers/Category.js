exports.Category = {
    products: ({id: categoryId}/*WE GET the id from the parent and we rename it to categoryId */, {filter}, {products}) => {
       //Return the products for that specific category (One to Many)
       //console.log(parent);
       //const categoryId = parent.id;
       const categoryProducts = products.filter((product) => product.categoryId === categoryId);
       let filteredProducts = categoryProducts;
       if (filter){
         if (filter.onSale === true){
            filteredProducts = filteredProducts.filter((product) => {
               return product.onSale;
            });
         }
       }
       return filteredProducts;
    }
  };