const Book = require("../schemas/book.schema");

function LibraryService() {

}

LibraryService.prototype.lookup = (sku) => {
    return Book.find({"sku": sku}).exec();
};

LibraryService.prototype.add = (book) => {
    return book.save();
};

module.exports = LibraryService;