const express = require('express');

const router = express.Router();

const booksController = require('../controllers/books');

router.use('/add-book', booksController.addBook);

router.post('/book-added', booksController.bookAdded);

router.use('/books', booksController.books);


module.exports = router;