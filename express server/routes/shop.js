const path = require('path')
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("third");
    res.sendFile(path.join(__dirname + '/index.html'));  /// send html file to the client 
})

module.exports = router