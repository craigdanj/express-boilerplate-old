const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//static folder for public assest.
app.use(express.static('public'));

//Body parser middleware.
app.use(bodyParser.urlencoded({extended: false}));

app.use('/redirect', (req, res, next) => {
    console.log('redirecting to home');
    res.redirect('/');
});

app.use('/add-book', (req, res, next) => {
    res.send(`<form method="post" action="/book-added">
        <input type="text" name="bookName" />
        <input type="submit" value="Send">
    </form>`);
});

app.post('/book-added', (req, res, next) => {
    console.log(req.body);
    res.redirect('/books');
});

app.use('/books', (req, res, next) => {
    res.send('<h1>Books</h1>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Home</h1>');
});

app.listen(3000);