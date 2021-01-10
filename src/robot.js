/**
 * Class representing the Robot Toy
 * Contains all the methods to manipulate the toys direction and possition.
 */
module.exports = class robot {
  constructor() {
    this.tableTop = null;
    this.position = null;
  }
  /**
   * place the robot on a table top in the specified x,y possition
   * and facing the given direction.
   */
  placeOn(tableTop, x, y, direction) {
    if (this.isSafePossition(tableTop, x, y)) {
      this.tableTop = tableTop;
      this.position = {
        x,
        y,
        direction,
      };
    }
  }
  /**
   *  Returns a boolean value signifying the safety of the toy
   *  in a given position.
   */
  isSafePossition(tableTop, x, y) {
    if (x < 0 || x > tableTop.length - 1 || y < 0 || y > tableTop.width - 1) {
      return false;
    }
    return true;
  }
};
