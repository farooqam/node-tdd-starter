const restify = require("restify");
const libraryRouter = require("../src/routes/library.routes");

function Api() {

}

Api.prototype.createServer = () => {
    const server = restify.createServer();
    libraryRouter.applyRoutes(server);

    return server;
};

module.exports = Api;