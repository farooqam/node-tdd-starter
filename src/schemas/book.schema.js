const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = Schema({
    "sku": String,
    "title": String
});

bookSchema.methods.findBook = (sku) => {
    this.find({"sku": sku}, (_, book) => {
        return book;
    });
};

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
