const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = Schema({
    "sku": {
        "type": String
    },
    "title": {
        "type": String
    }
});

const BookModel = mongoose.model("BookModel", bookSchema);

module.exports = BookModel;
