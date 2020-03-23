const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

//static folder for public assest.
app.use(express.static('public'));

//Body parser middleware.
app.use(bodyParser.urlencoded({extended: false}));

//Routes
app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);