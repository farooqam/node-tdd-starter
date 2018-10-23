const Router = require("restify-router").Router;
const LibraryController = require("../controllers/library.controller");

const router = new Router();
const controller = new LibraryController();

router.get("/api/books/:sku", controller.get);

module.exports = router;