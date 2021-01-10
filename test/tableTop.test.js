const expect = require("chai").expect;
const TableTop = require("../src/tableTop");

describe("A valid table top", () => {
  it("Should be a square", () => {
    let tableTop = new TableTop(5, 5);
    expect(tableTop.Measurements.length).to.be.equal(
      tableTop.Measurements.width
    );
  });

  it("Should be 5X5 if no measurements are given", () => {
    let tableTop = new TableTop();
    expect(tableTop.Measurements.length).to.be.equal(5);
    expect(tableTop.Measurements.width).to.be.equal(5);
  });

  it("Should have positive non zero measurements", () => {
    let tableTop = new TableTop(5, 5);
    expect(tableTop.Measurements.length).to.be.greaterThan(0);
    expect(tableTop.Measurements.width).to.be.greaterThan(0);
  });

  it("Should not have zero or negative measurements", () => {
    let tableTop = new TableTop(-1, 0);
    expect(tableTop).to.be.deep.equal({});
  });
});
