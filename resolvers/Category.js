exports.Category = {
    products: ({id: categoryId}/*WE GET the id from the parent and we rename it to categoryId */, {filter}, {products, reviews}) => {
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
         if ([1,2,3,4,5].includes(filter.avgRating)){
            filteredProducts = filteredProducts.filter((product) => {
               let sumRating = 0;
               let numReviews = 0;
               reviews.forEach(review => {
                  if(review.productId === product.id){
                     sumRating += review.rating;
                     numReviews++;
                  }
               });
               const avgProductRating = sumRating / numReviews;
               return avgProductRating >= filter.avgRating;
            });
         }
       }
       return filteredProducts;
    }
  };