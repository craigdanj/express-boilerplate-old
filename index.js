const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require('./utils/path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const commonController = require('./controllers/common');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views'); //You don't really need this. Its just for demonstration.

//static folder for public assest.
app.use(express.static(path.join(__dirname, 'public')));

//Body parser middleware.
app.use(bodyParser.urlencoded({extended: false}));

//Routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(commonController.get404);

app.listen(3000);