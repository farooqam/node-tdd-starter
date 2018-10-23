const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
require("sinon-mongoose");
const BookModel = require("../../src/schemas/book.schema");
const LibraryService = require("../../src/services/library.service");
const factory = require("factory-girl").factory;

describe("Library service", () => {
    describe("Lookup", () => {
        it("Should get the book from the database", (done) => {
            const sku = "1234";
            const title = "Treasure Island";
            const bookModelMock = sinon.mock(BookModel);
            bookModelMock.expects("find")
                .withArgs({"sku": sku})
                .chain("exec")
                .resolves({"sku": sku, "title": title});

            const service = new LibraryService();
            service.lookup(sku).then((book) => {
                bookModelMock.verify();
                bookModelMock.restore();

                expect(book.sku).to.equal(sku);
                expect(book.title).to.equal(title);

                done();
            });
        });
    });

    describe("Add book", () => {
        it("Should return the book that was added", (done) => {
            const sku = "1234";
            const title = "Treasure Island";
            factory.define("book", BookModel, {"sku": sku, "title": title});

            factory.build("book").then((doc) => {
                const book = doc;
                const bookMock = sinon.mock(book);
                bookMock.expects("save").resolves(book);

                const service = new LibraryService();
                service.add(book).then((b) => {
                    bookMock.verify();
                    bookMock.restore();

                    expect(b.sku).to.equal(sku);
                    expect(b.title).to.equal(title);

                    done();
                });

            });
        });
    });
});