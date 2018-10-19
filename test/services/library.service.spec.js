const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
require("sinon-mongoose");
const MongooseBookModel = require("../../src/schemas/book.schema");

const LibraryService = require("../../src/services/library.service");

describe("Library service", () => {
    describe("Lookup", () => {
        it("Should get the book from the database", () => {
            const sku = "1234";
            const title = "Treasure Island";

            const mongooseModelMock = sinon.mock(MongooseBookModel);
            mongooseModelMock.expects("find").once().withArgs(sku);

            const service = new LibraryService();
            const book = service.lookup(sku);

            mongooseModelMock.verify();
            mongooseModelMock.restore();

            expect(book.sku).to.equal(sku);
            expect(book.title).to.equal(title);
        });
    });
});