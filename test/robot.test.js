const expect = require("chai").expect;
const Robot = require("../src/robot");
const TableTop = require("../src/tableTop");
const DIRECTIONS = require("../src/directions");

/**
 * Tests for the Robot class
 */
describe("A toy robot", () => {
  let robot, tableTop;

  beforeEach(() => {
    tableTop = new TableTop(5, 5);
    robot = new Robot(tableTop);
  });

  describe("while placing", () => {
    it("Should be not be placable outside a table top (to the left of table).", () => {
      robot.placeOn(-1, 3, DIRECTIONS.NORTH);
      expect(robot.position).to.be.deep.equal(null);
    });

    it("Should be not be placable outside a table top (to the right of table).", () => {
      robot.placeOn(5, 3, DIRECTIONS.NORTH);
      expect(robot.position).to.be.deep.equal(null);
    });

    it("Should be not be placable outside a table top (to the north of table).", () => {
      robot.placeOn(0, 5, DIRECTIONS.NORTH);
      expect(robot.position).to.be.deep.equal(null);
    });

    it("Should be not be placable outside a table top (to the south of table).", () => {
      robot.placeOn(0, -1, DIRECTIONS.NORTH);
      expect(robot.position).to.be.deep.equal(null);
    });

    it("Should be placable on a table top.", () => {
      robot.placeOn(2, 3, DIRECTIONS.NORTH);
      expect(robot.position).to.be.deep.equal({
        x: 2,
        y: 3,
        direction: DIRECTIONS.NORTH,
      });
    });
  });

  describe("while moving", () => {
    it("Should not move if it is not placed yet.", () => {
      robot.move();
      expect(robot.position).to.be.deep.equal(null);
    });

    it("Should move a unit in the north direction if it is facing north", () => {
      robot.placeOn(2, 3, DIRECTIONS.NORTH);
      robot.move();
      expect(robot.position).to.be.deep.equal({
        x: 2,
        y: 4,
        direction: DIRECTIONS.NORTH,
      });
    });

    it("Should move a unit in the south direction if it is facing south", () => {
      robot.placeOn(2, 3, DIRECTIONS.SOUTH);
      robot.move();
      expect(robot.position).to.be.deep.equal({
        x: 2,
        y: 2,
        direction: DIRECTIONS.SOUTH,
      });
    });

    it("Should move a unit in the east direction if it is facing east", () => {
      robot.placeOn(2, 3, DIRECTIONS.EAST);
      robot.move();
      expect(robot.position).to.be.deep.equal({
        x: 1,
        y: 3,
        direction: DIRECTIONS.EAST,
      });
    });
    it("Should move a unit in the west direction if it is facing west", () => {
      robot.placeOn(2, 3, DIRECTIONS.WEST);
      robot.move();
      expect(robot.position).to.be.deep.equal({
        x: 3,
        y: 3,
        direction: DIRECTIONS.WEST,
      });
    });
  });
});
