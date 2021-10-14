const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item')
const Order = require('./models/order');
const OrderItem = require('./models/order-item');

app.use((req, res, next) => {
    User.findByPk(1).then(user => {
        console.log("DONE -- ");
        req.user = user;
        console.log(user + " 00 ");
        next();
    }).catch(err => {
        console.log(err);
    })
})


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });

sequelize.sync().then(result => {
    // console.log(result);
    return User.findByPk(1);

}).then(user => {
    if (!user) {
        return User.create({ name: 'Sanjay', email: 'sanjay@gmail.com' });
    }
    return user;
}).then(user => {
    return user.createCart();
}).then(user => {
    // console.log(user);
    app.listen(3000);
}).catch(err => {
    console.log(err);
})

