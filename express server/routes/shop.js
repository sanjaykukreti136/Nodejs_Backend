const path = require('path')
const express = require('express');
const router = express.Router();
const adminData = require('./admin')
const shopP = require('../controllers/product')
router.get('/', shopP.shopProducts)

module.exports = router