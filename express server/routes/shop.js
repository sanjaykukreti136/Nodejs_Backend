const path = require('path')
const express = require('express');
const router = express.Router();
const adminData = require('./admin')
router.get('/', (req, res, next) => {
    console.log( adminData.product );
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));  /// send html file to the client 
})

module.exports = router