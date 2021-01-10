"use strict";

const fs = require("fs");
const CONFIG = require("./config.json");
const FILE_PATH = CONFIG.filePath;
const TableTop = require("./src/tableTop");
const Parser = require("./src/parser");
const Robot = require("./src/robot");

let tableTop = new TableTop(CONFIG.tableLength, CONFIG.tableWidth);
let robot = new Robot(tableTop);
// console.log(tableTop.Measurements);

/**
 * Entry point to the application
 */
let driver = function () {
  fs.readFile(FILE_PATH, "utf8", function (err, data) {
    if (err) {
      console.log("Missing input file in the input folder");
      // put the code to read from terminal here if there is time
    }

    let commandsArray = data.split("\n");

    commandsArray.forEach((commandText) => {
      Parser.parse(robot, commandText.trim().toUpperCase());
    });

    // console.log(data);
    // console.log(commandsArray);
  });
};

driver();
