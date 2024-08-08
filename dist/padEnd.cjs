"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isUndefined = require("./isUndefined.cjs");
const padEnd = (obj, maxLength = 2, fillString = "0") => {
  if (isUndefined.isUndefined(obj) || Number.isNaN(obj)) {
    console.error(`"${obj}" is not a string or number`);
    obj = "";
  }
  return `${obj}`.padEnd(maxLength, fillString);
};
exports.padEnd = padEnd;
