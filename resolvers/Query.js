exports.Query = {
    products: (parent, {filter}, {products, reviews}) => {
        let filteredProducts = products;
        if (filter/*if filter is defined*/){
            const { onSale, avgRating } = filter
            if(onSale === true){
                filteredProducts = filteredProducts.filter((product) => {
                    return product.onSale; //Only returns products that are onSale. onSale is true
                });
            }
            if([1,2,3,4,5].includes(avgRating)){
                filteredProducts = filteredProducts.filter((product) => {
                    let sumRating = 0;
                    let numReviews = 0;
                    reviews.forEach(review => {
                        if(review.productId === product.id){
                            sumRating += review.rating;
                            numReviews++;
                        }
                    });
                    //console.log(sumRating, product.name);
                    const avgProductRating = sumRating / numReviews;
                    return avgProductRating >= avgRating;
                });
            }
        }
        return filteredProducts;
    },
    product: (parent, {id: productId}, {products}) => {
        //const productId = args.id;
        const product = products.find((product) => product.id === productId);
        return product;
    },
    categories: (parent, args, {categories}) => {
        return categories;
    },
    category: (parent, {id}, {categories}) => {
        //This is the same but more professional
       //const { id } = args;
       return categories.find((category) => category.id === id);
    },
};