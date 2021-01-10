const sinon = require("sinon");

const expect = require("chai").expect;
const Robot = require("../src/robot");
const TableTop = require("../src/tableTop");
const parser = require("../src/parser");
const DIRECTIONS = require("../src/directions");
const InvalidRobotCommandException = require("../src/Exception/InvalidRobotCommand");

/**
 * Tests for the Parser class
 * The parser class is tested only to transfer control to robot class.
 */
describe("The command parser", () => {
  let robot, tableTop;
  // For silencing the console.log in REPORT
  sinon.stub(console, "log");

  beforeEach(() => {
    tableTop = new TableTop(5, 5);
    robot = new Robot(tableTop);
  });

  it("Should place the robot when a valid place command is passed", () => {
    parser.parseAndRun(robot, "PLACE 0,0,NORTH");
    expect(robot.position).to.be.deep.equal({
      x: 0,
      y: 0,
      direction: DIRECTIONS.NORTH,
    });
  });

  it("Should move the robot when a valid move command is encountered", () => {
    robot.placeOn(0, 0, DIRECTIONS.NORTH);
    parser.parseAndRun(robot, "MOVE");
    expect(robot.position).to.be.deep.equal({
      x: 0,
      y: 1,
      direction: DIRECTIONS.NORTH,
    });
  });

  it("Should execute left command of the robot when command 'LEFT' is encountered.", () => {
    robot.placeOn(0, 0, DIRECTIONS.NORTH);
    parser.parseAndRun(robot, "LEFT");
    expect(robot.position).to.be.deep.equal({
      x: 0,
      y: 0,
      direction: DIRECTIONS.WEST,
    });
  });

  it("Should execute Right command of the robot when command 'RIGHT' is encountered.", () => {
    robot.placeOn(0, 0, DIRECTIONS.NORTH);
    parser.parseAndRun(robot, "RIGHT");
    expect(robot.position).to.be.deep.equal({
      x: 0,
      y: 0,
      direction: DIRECTIONS.EAST,
    });
  });

  it("Should not change the position when a REPORT command is executed", () => {
    robot.placeOn(0, 0, DIRECTIONS.NORTH);
    parser.parseAndRun(robot, "REPORT");
    expect(robot.position).to.be.deep.equal({
      x: 0,
      y: 0,
      direction: DIRECTIONS.NORTH,
    });
  });

  it("Should throw invalidCommandException error when invalid commands are encountered", () => {
    try {
      expect(parser.parseAndRun(robot, "Sample Invalid Command")).to.throw(
        new InvalidRobotCommandException(
          "Sample Invalid Command is not a valid robot command"
        )
      );
    } catch {}
  });
});
