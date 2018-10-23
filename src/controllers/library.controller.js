const LibraryService = require("../services/library.service");

function LibraryController() {

}

LibraryController.prototype.get = (req, res, next) => {
    const libraryService = new LibraryService();
    const book = libraryService.lookup(req.params.sku);
    console.log(`Book: ${JSON.stringify(book)}`);
    res.send(200, book);
    return next();
};

module.exports = LibraryController;