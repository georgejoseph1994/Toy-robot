const DIRECTIONS = require("./directions");
/**
 * Class representing the Robot Toy
 * Contains all the methods to manipulate the toys direction and possition.
 */
module.exports = class robot {
  constructor(tableTop) {
    this.tableTop = tableTop;
    this.position = null;
  }
  /**
   * place the robot on a table top in the specified x,y possition
   * and facing the given direction.
   */
  placeOn(x, y, direction) {
    if (this.isSafePossition(x, y)) {
      this.position = {
        x,
        y,
        direction,
      };
    }
    return this.position;
  }

  /**
   * Method to move the robot one unit in the direction it is facing
   */
  move() {
    if (this.position == null) {
      return;
    }
    let futurePositionX = this.position.x;
    let futurePositionY = this.position.y;
    switch (this.position.direction) {
      case DIRECTIONS.NORTH:
        futurePositionY += 1;
        break;
      case DIRECTIONS.SOUTH:
        futurePositionY -= 1;
        break;
      case DIRECTIONS.EAST:
        futurePositionX -= 1;
        break;
      case DIRECTIONS.WEST:
        futurePositionX += 1;
        break;
    }
    if (this.isSafePossition(futurePositionX, futurePositionY)) {
      this.position = {
        x: futurePositionX,
        y: futurePositionY,
        direction: this.position.direction,
      };
    }
    return this.position;
  }

  /**
   *  Returns a boolean value signifying the safety of the toy
   *  in a given position.
   */
  isSafePossition(x, y) {
    if (
      x < 0 ||
      x > this.tableTop.length - 1 ||
      y < 0 ||
      y > this.tableTop.width - 1
    ) {
      return false;
    }
    return true;
  }
};
