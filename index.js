const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('root');
    next();
});

app.use('/test', (req, res, next) => {
    console.log('test');
    next();
});

app.listen(3000);