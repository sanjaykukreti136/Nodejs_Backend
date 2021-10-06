const express = require('express')
const path = require('path')
const router = express.Router();
//// unser admin/add-item
router.use('/add_item', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
})
let x = "";
router.post('/action_on_item', (req, res, next) => {
    console.log(req.body);
    x = req.body.fname;
    console.log(x + " ye hai");
    res.redirect('/admin/show_item')
})

router.use('/show_item', (req, res, next) => {
    console.log("post wale me");
    res.send(x);
})


module.exports = router;