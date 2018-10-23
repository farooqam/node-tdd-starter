const chai = require("chai");
const expect = chai.expect;
const supertest = require("supertest");
const httpStatus = require("http-status");
const sinon = require("sinon");
const factory = require("factory-girl").factory;
const Api = require("../../src/server");
const LibraryService = require("../../src/services/library.service");

describe("Library controller", () => {
    it("Should return the book", (done) => {
        factory.define("libraryService", LibraryService, new LibraryService());

        factory.build("libraryService").then((libraryService) => {
            const mockLibraryService = sinon.mock(libraryService);

            const sku = "1234";
            const title = "Treasure Island";

            mockLibraryService.expects("lookup")
                .withArgs(sku)
                .returns({"sku": sku, "title": title});

            const api = new Api();
            supertest(api.createServer())
                .get(`/api/books/${sku}`)
                .end((_, res) => {
                    mockLibraryService.verify();
                    mockLibraryService.restore();
                    expect(res.status).to.equal(httpStatus.OK);
                    expect(res.body.sku).to.equal(sku);
                    expect(res.body.title).to.equal(title);
                    done();
                });
        });
    });
});