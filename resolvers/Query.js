exports.Query = {
    products: (parent, args, {products}) => {
        return products;
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