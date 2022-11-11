const { v4: uuid } = require("uuid")

exports.Mutation = {
    addCategory: (parent, { input }, { db }) => {
        const { name } = input;
        const newCategory = {
            id: uuid(),
            name,
        };
        db.categories.push(newCategory);
        return newCategory;
    },
    addProduct: (parent, {input}, {db}) => {
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

        db.products.push(newProduct);
        return newProduct;
    },

    addReview: (parent, {input}, {db}) => {
        const {
            date,
            title,
            comment,
            rating,
            productId,
        } = input;

        const newReview = {
            id: uuid(),
            date,
            title,
            comment,
            rating,
            productId,
        };

        db.reviews.push(newReview);

        return newReview;
    },

    deleteCategory: (parent, {id}, {db}) => {
        //We assign the categories that do not have the id to the categories array
        db.categories = db.categories.filter((category) => category.id !== id);
        // From the products array we map the products that do not have the id of the category
        db.products = db.products.map((product) => {
            if(product.categoryId === id){
                return {...product, categoryId: null}; //We return the product with the categoryId set to null because the category was deleted
            }
            return product;
        });
        return true;
    },


    deleteProduct: (parent, {id}, {db}) => {
        //We need to delete the product from the products array
        db.products = db.products.filter((product) => product.id !== id);
        //We need to delete the reviews from the reviews array
        db.reviews = db.reviews.filter((review) => review.productId !== id);
        return true;
    }
};