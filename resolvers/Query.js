const { products,categories } = require("../db");

exports.Query = {
    hello: () => {
        return "Hola Paquito!";
    },
    numberOfAnimals: () => {
        return 55;
    },
    price: () => {
        return 25.50;
    },
    isCool: () => {
        return true;
    },
    greetings: () => {
        return ["Hello","Hi","Hey"];
    },
    products: () => {
        return products
    },
    product: (parent, args, context) => {
        const productId = args.id;
        const product = products.find((product) => product.id === productId);
    },
    categories: () => {
        return categories;
    },
    category: (parent, args, context) => {
        //This is the same but more professional
       const { id } = args;
       return categories.find((category) => category.id === id);
    },
};