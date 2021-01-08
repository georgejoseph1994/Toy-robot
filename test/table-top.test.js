const expect = require("chai").expect;
const TableTop = require("../src/tableTop");

describe("A valid table top", () => {
    it("Should be a square", () => {
        let tableTop = new TableTop(5,5)
        expect(tableTop.Measurements.length).to.be.equal(tableTop.Measurements.width);
    });

    it("Should have positive non zero measurements", () => {
        let tableTop = new TableTop(5,5)
        expect(tableTop.Measurements.length).to.be.greaterThan(0);
        expect(tableTop.Measurements.width).to.be.greaterThan(0);
    });
});
