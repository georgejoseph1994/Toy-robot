/**
 * Exception to be thrown when the encountered command text is an invalid.
 * @param {String} message
 */
function InvalidRobotCommandException(message) {
  const error = new Error(message);
  error.code = "1";
  return error;
}

InvalidRobotCommandException.prototype = Object.create(Error.prototype);
module.exports = InvalidRobotCommandException;
