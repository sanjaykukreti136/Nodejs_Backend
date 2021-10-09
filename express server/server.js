const express = require('express');
const path = require('path')
const app = express();
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const errorPage = require('./controllers/product')
app.listen('3000', () => {
    console.log("server is running");

})

//   SETTING GLOBAL VIEW ENGINE FOR  TEMPLATES
// app.engine('hbs', expressHbs({ layoutsDir: 'views/layouts/', defaultLayout: 'main-layout' })) // HANDLEBARS
// app.set('view engine', 'hbs')
// app.set('view engine', 'pug'); /// PUG TEMPLATE
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
app.use('/admin', adminRoutes);
app.use(shopRoutes);   ////  it is comment bcz it will redirect to '/' url , so if it will not commentd
/// then our 404 page never executed
app.use(errorPage.err)



