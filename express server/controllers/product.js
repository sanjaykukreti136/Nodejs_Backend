
const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', { pageTitle: "ADD PRODUCT", path: '/admin/add-product' })
    //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
}

exports.getSendProudct = (req, res, next) => {
    x = req.body.fname;
    products.push({ title: x });

    res.redirect('/')
}

exports.shopProducts = (req, res, next) => {
    // console.log(adminData.product);
    res.render('shop', { prods: products, pageTitle: "My Shop .", path: '/' })
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));  /// send html file to the client 
}

exports.err = (req, res) => {
    res.status(404).render('page-not-found', { pageTitle: "Page Not Found :) ", path: '/' })
    // res.status(404).sendFile(path.join(__dirname + '/views/page-not-found.html')) /// 404 page should be in last
}