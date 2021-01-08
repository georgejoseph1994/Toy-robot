const expect = require("chai").expect;
const Table = require("../src/table");

describe("A valid table top", () => {
    it("Should be a square", () => {
        let tableTop = { length: 5, width: 5 };
        expect(tableTop.length).to.be.equal(tableTop.width);
    });

    it("Should have positive non zero measurements", () => {
        let tableTop = { length: 5, width: 5 };
        expect(tableTop.length).to.be.greaterThan(0);
        // expect(tableTop.width).to.be.greaterThan(0);
    });
});
