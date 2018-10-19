const chai = require("chai");
const expect = chai.expect;
const LibraryService = require("../../src/services/library.service");

describe("Library service", () => {
    describe("Lookup", () => {
        it("Should get the book", () => {
            const service = new LibraryService();
            const sku = "1234";
            const book = service.lookup(sku);
            expect(book.sku).to.equal(sku);
            expect(book.title).to.equal("Moby Dick");
        });
    });
});