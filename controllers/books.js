exports.addBook = (req, res, next) => {
    res.send(`<form method="post" action="/book-added">
        <input type="text" name="bookName" />
        <input type="submit" value="Send">
    </form>`);
};