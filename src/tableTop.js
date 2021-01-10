/**
 * Class representing a table top where the toy robot is placed.
 */
class TableTop {
  constructor(length = 5, width = 5) {
    if (length < 1 || width < 1) {
      return false;
    }
    this.length = length;
    this.width = width;
  }

  get Measurements() {
    return {
      length: this.length,
      width: this.width,
    };
  }
}

module.exports = TableTop;
