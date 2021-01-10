"use strict";

module.exports = class Parser {
  /**
   *
   * @param {Robot} robot
   * @param {String} commandText
   */
  static parse(robot, commandText) {
    let PLACE = /^PLACE\s+([\d]+)\s*,\s*([\d]+)\s*,\s*(NORTH|SOUTH|EAST|WEST)\s*$/g;
    let splittedPlace = PLACE.exec(commandText);

    if (commandText == "MOVE") {
      robot.move();
    }
    if (commandText == "REPORT") {
      robot.report();
    } else if (splittedPlace) {
      let currentPosition = robot.placeOn(
        parseInt(splittedPlace[1]),
        parseInt(splittedPlace[2]),
        splittedPlace[3]
      );
    }
  }
};
