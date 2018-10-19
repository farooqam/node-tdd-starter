const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
require("sinon-mongoose");
const BookConverter = require("../../../src/converters/book.converter.js");
const MongooseBookModel = require("../../../src/schemas/book.schema");


describe("Book converter", () => {
    it("Should convert a Mongoose Book model to a Book model", () => {
        const mongooseModelMock = sinon.mock(new MongooseBookModel({"sku": "7890", "title": "Treasure Island"}));
        const converter = new BookConverter();
        const model = converter.convert(mongooseModelMock);

        expect(model.sku).to.equal(mongooseModelMock.sku);
        expect(model.title).to.equal(mongooseModelMock.title);
    });
});