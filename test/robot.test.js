const expect = require("chai").expect;
const Robot = require("../src/robot");
const TableTop = require("../src/tableTop");

/**
 * Tests for the Robot class
 */
describe("A toy robot", () => {
  let robot, tableTop;

  beforeEach(() => {
    tableTop = new TableTop(5, 5);
    robot = new Robot(tableTop);
  });

  it("Should be not be placable outside a table top", () => {
    robot.placeOn(-1, 3, "NORTH");
    expect(robot.position).to.be.deep.equal(null);
  });

  it("Should be placable on a table top", () => {
    robot.placeOn(2, 3, "NORTH");
    expect(robot.position).to.be.deep.equal({
      x: 2,
      y: 3,
      direction: "NORTH",
    });
  });
});
