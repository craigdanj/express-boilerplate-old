const Book = require("../models/book");

exports.addBook = (req, res, next) => {
    res.send(`<form method="post" action="/book-added">
        <input type="text" name="bookName" />
        <input type="submit" value="Send">
    </form>`);
};

exports.bookAdded = (req, res, next) => {
    console.log(req.body);
    res.redirect('/books');
}

exports.books = (req, res, next) => {
    res.send('<h1>Books</h1>', { books: []});
};