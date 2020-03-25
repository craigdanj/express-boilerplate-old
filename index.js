const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require('./utils/path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

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

app.use((req, res ,next) => {
    //The 404 route
    res.status(404).render('404');
});

app.listen(3000);