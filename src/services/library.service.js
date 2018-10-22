const Book = require("../schemas/book.schema");

function LibraryService() {

}

LibraryService.prototype.lookup = (sku) => {
    return Book.find({"sku": sku}).exec();
};

LibraryService.prototype.add = (sku, title, cb) => {
    const book = new Book({"sku": sku, "title": title});
    return book.save(cb(book));
};
module.exports = LibraryService;