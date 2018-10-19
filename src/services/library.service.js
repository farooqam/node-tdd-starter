const Book = require("../models/book.model");

function LibraryService() {

}

LibraryService.prototype.lookup = function(sku) {
    return new Book(sku, "Moby Dick");
};

module.exports = LibraryService;