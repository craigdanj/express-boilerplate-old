const express = require('express');

const router = express.Router();

router.use('/add-book', (req, res, next) => {
    res.send(`<form method="post" action="/book-added">
        <input type="text" name="bookName" />
        <input type="submit" value="Send">
    </form>`);
});

router.post('/book-added', (req, res, next) => {
    console.log(req.body);
    res.redirect('/books');
});

router.use('/books', (req, res, next) => {
    res.send('<h1>Books</h1>');
});


module.exports = router;