/**
 * Class representing a table top where the toy robot is placed.
 */
class TableTop {
  constructor(length = 5, width = 5) {
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
