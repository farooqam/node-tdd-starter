const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
require("sinon-mongoose");
const BookModel = require("../../src/schemas/book.schema");
const LibraryService = require("../../src/services/library.service");

describe("Library service", () => {
    describe("Lookup", () => {
        it("Should get the book from the database", (done) => {
            const sku = "1234";
            const title = "Treasure Island";
            const bookModelMock = sinon.mock(BookModel);
            bookModelMock.expects("find").withArgs({"sku": sku}).yields(null, {"sku": sku, "title": title});

            const service = new LibraryService();
            const book = service.lookup(sku);

            bookModelMock.verify();
            bookModelMock.restore();

            expect(book.sku).to.equal(sku);
            expect(book.title).to.equal(title);

            done();
        });
    });
});