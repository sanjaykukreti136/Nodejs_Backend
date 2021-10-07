const express = require('express')
const path = require('path')
const router = express.Router();

const products = [];

//// unser admin/add-item
router.get('/add_item', (req, res, next) => {
    res.render('add-product', { pageTitle: "ADD PRODUCT", path: '/admin/add-product' })
    //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
})
let x = "";
router.post('/add_item', (req, res, next) => {
    x = req.body.fname;
    products.push({ title: x });

    res.redirect('/')
})




exports.routes = router;
exports.product = products;