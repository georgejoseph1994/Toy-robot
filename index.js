"use strict";

const fs = require("fs");
const CONFIG = require("./config.json");
const FILE_PATH = CONFIG.filePath;
const TableTop = require("./src/tableTop.js");

let tableTop = new TableTop(CONFIG.tableLength, CONFIG.tableWidth);
console.log(tableTop.Measurements);

/**
 * Entry point to the applications
 */
let driver = function () {
  fs.readFile(FILE_PATH, "utf8", function (err, data) {
    if (err) {
      console.log("fishy");
      // put the code to read from terminal here if there is time
    }
    let commandsArray = data.split("\n");
    console.log(data);
    console.log(commandsArray);
  });
};

driver();
