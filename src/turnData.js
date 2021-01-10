const DIRECTIONS = require("./directions");

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
