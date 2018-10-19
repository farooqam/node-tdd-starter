const Book = require("../models/book.model");

function BookConverter() {

}

BookConverter.prototype.convert = function(source) {
    return new Book(source.sku, source.title);
};

module.exports = BookConverter;