const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = Schema({
    "sku": String,
    "title": String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
