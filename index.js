"use strict";

const fs = require("fs");

const CONFIG = require("./config.json");
const TableTop = require("./src/tableTop");
const Parser = require("./src/parser");
const Robot = require("./src/robot");

const FILE_PATH = CONFIG.filePath;
const debug = false;
const tableTop = new TableTop(CONFIG.tableLength, CONFIG.tableWidth);
let robot = new Robot(tableTop);
/**
 * Entry point to the application.
 * Reads file specified in config.json and invokes
 * command parser for the toy robot.
 */
let driver = function () {
  fs.readFile(FILE_PATH, "utf8", function (err, data) {
    if (err) {
      console.error(
        "Warning !! Missing input file, Check filePath in config.json"
      );
      return;
      // put the code to read from terminal here if there is time
    }

    console.log("Toy Robot Simulator");
    console.log("===================");

    let commandsArray = data.split("\n");
    commandsArray.forEach((commandText) => {
      Parser.parseAndRun(robot, commandText.trim().toUpperCase());
      if (debug) {
        console.log(commandText);
        console.log(robot.position);
      }
    });
  });
};

driver();
