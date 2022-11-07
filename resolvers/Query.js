exports.Query = {
    products: (parent, {filter}, {products}) => {
        let filteredProducts = products;
        if (filter/*if filter is defined*/){
            if(filter.onSale === true){
                filteredProducts = filteredProducts.filter((product) => {
                    return product.onSale; //Only returns products that are onSale. onSale is true
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