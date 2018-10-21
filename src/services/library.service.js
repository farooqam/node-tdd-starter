const Book = require("../schemas/book.schema");

function LibraryService() {

}

LibraryService.prototype.lookup = (sku) => {
    //const book = Book.findBook(sku);
    //return book;
    Book.find({"sku": sku}, (_, book) => {
        return book;
    });
};

module.exports = LibraryService;