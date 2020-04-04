const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const feedRoutes = require('./routes/feed');

const app = express();

//Body parser middleware.
app.use(bodyParser.json());

//Static folder for public assest.
app.use(express.static(path.join(__dirname, 'public')));

//CORS Headers
app.use((req, res ,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorisation');
    next();
})

//Routes
app.use('/feed', feedRoutes);

app.listen(3000);
