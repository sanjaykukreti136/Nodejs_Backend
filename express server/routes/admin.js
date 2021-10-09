const express = require('express')
const path = require('path')
const router = express.Router();
const addProductsPage = require('../controllers/product')


//// unser admin/add-item
router.get('/add_item', addProductsPage.getAddProduct)
let x = "";
router.post('/add_item', addProductsPage.getSendProudct)



module.exports = router;