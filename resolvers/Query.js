exports.Query = {
    getProducts: (parent, {filter}, {db}) => {
        let filteredProducts = db.products;
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
                    db.reviews.forEach(review => {
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
    getProduct: (parent, {id: productId}, {db}) => {
        //const productId = args.id;
        const product = db.products.find((product) => product.id === productId);
        return product;
    },
    getCategories: (parent, args, {db}) => {
        return db.categories;
    },
    getCategory: (parent, {id}, {db}) => {
        //This is the same but more professional
       //const { id } = args;
       return db.categories.find((category) => category.id === id);
    },
};