const express = require('express');

const app = express();


app.use('/test', (req, res, next) => {
    console.log('test');
    res.send('<h1>Test</h1>');
});

app.use('/', (req, res, next) => {
    console.log('root');
    res.send('<h1>Home</h1>');
});

app.listen(3000);