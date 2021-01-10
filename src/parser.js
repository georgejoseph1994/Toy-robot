"use strict";
const InvalidRobotCommandException = require("./Exception/InvalidRobotCommand");

/**
 * The parser class parses and runs the robot commands.
 */
module.exports = class Parser {
  /**
   * Evaluate and run the given command text on the robot.
   * @param {Robot} robot
   * @param {String} commandText
   */
  static parseAndRun(robot, commandText) {
    let PLACE = /^PLACE\s+([\d]+)\s*,\s*([\d]+)\s*,\s*(NORTH|SOUTH|EAST|WEST)\s*$/g;
    let splittedPlace = PLACE.exec(commandText);

    if (commandText == "MOVE") {
      robot.move();
    } else if (commandText == "REPORT") {
      robot.report();
    } else if (commandText == "LEFT") {
      robot.turnLeft();
    } else if (commandText == "RIGHT") {
      robot.turnRight();
    } else if (splittedPlace) {
      let currentPosition = robot.placeOn(
        parseInt(splittedPlace[1]),
        parseInt(splittedPlace[2]),
        splittedPlace[3]
      );
    } else {
      throw new InvalidRobotCommandException(
        `${commandText} is not a valid robot command`
      );
    }
  }
};
