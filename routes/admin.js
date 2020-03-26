const express = require('express');

const router = express.Router();

const booksController = require('../controllers/books');

router.use('/add-book', booksController.addBook);

router.post('/book-added', (req, res, next) => {
    console.log(req.body);
    res.redirect('/books');
});

router.use('/books', (req, res, next) => {
    res.send('<h1>Books</h1>');
});


module.exports = router;