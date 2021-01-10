const DIRECTIONS = require("./directions");
/**
 * Turn Data tells the robot which direction to face when it execute a turn
 * Outer Key represents the direction robot is facing and inner keys represents the move.
 */
turnData = {
  SOUTH: {
    left: DIRECTIONS.EAST,
    right: DIRECTIONS.WEST,
  },
  NORTH: {
    left: DIRECTIONS.WEST,
    right: DIRECTIONS.EAST,
  },
  WEST: {
    left: DIRECTIONS.SOUTH,
    right: DIRECTIONS.NORTH,
  },
  EAST: {
    left: DIRECTIONS.NORTH,
    right: DIRECTIONS.SOUTH,
  },
};
module.exports = turnData;
