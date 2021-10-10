const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);


module.exports = class Cart {
    static addProduct(id, productPrice) {
        /// FETCH CART FROM FILE 
        fs.readFile(p, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 };
            if (!err) {
                cart = JSON.parse(fileContent)
            }

            /// ANAYLIZE THE CART 
            const existingProductIdx = cart.products.findIndex(p => p.id === id);
            const existingProduct = cart.products[existingProductIdx];
            let updatedProduct;
            if (existingProduct) {
                updatedProduct = { ...existingProduct };
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIdx] = updatedProduct;

            }
            else {
                updatedProduct = { id: id, qty: 1 };
                cart.products = [...cart.products, updatedProduct];
            }

            cart.totalPrice = cart.totalPrice + +productPrice;
            // ADD PRODUCT OR INCREASE QUANTITY

            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err);
            })
        })
    }
}