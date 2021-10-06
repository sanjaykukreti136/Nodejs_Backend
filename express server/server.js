const express = require('express');
const path = require('path')
const app = express();
const bodyParser = require('body-parser');
app.listen('3000', () => {
    console.log("server is running");

})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
const adminRoutes = require('./routes/admin');
const publicRoutes = require('./routes/shop');
app.use('/admin', adminRoutes);
app.use(publicRoutes);   ////  it is comment bcz it will redirect to '/' url , so if it will not commentd
/// then our 404 page never executed
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname + '/views/page-not-found.html')) /// 404 page should be in last
})



