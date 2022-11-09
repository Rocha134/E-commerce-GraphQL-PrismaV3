const { v4: uuid } = require("uuid")

exports.Mutation = {
    addCategory: (parent, { input }, { categories }) => {
        const { name } = input;
        const newCategory = {
            id: uuid(),
            name,
        };
        categories.push(newCategory);
        return newCategory;
    },
    addProduct: (parent, {input}, {products}) => {
        const {
            name,
            image,
            price,
            onSale,
            quantity,
            categoryId,
            description,
        } = input;

        //We should check if 

        const newProduct = {
            id: uuid(),
            name,
            image,
            price,
            onSale,
            quantity,
            categoryId,
            description,
        }

        products.push(newProduct);
        return newProduct;
    }
};