const books = [];

module.exports = class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    save() {
        books.push(this);
    }

    static fetchAll() {
        return books;
    }
}