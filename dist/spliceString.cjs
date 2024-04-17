"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isString = require("./isString.cjs");
const isNumber = require("./isNumber.cjs");
const spliceString = (string, start, deleteCount = 0, insertString = "") => {
  if (!isString.isString(string)) {
    console.error(`"${string}" is not a string`);
    return "";
  }
  if (!isNumber.isNumber(deleteCount) && insertString === "") {
    insertString = deleteCount;
    deleteCount = 0;
  }
  if (start < 0 || string.length < start || deleteCount < 0) {
    return string;
  }
  return string.substring(0, start) + insertString + string.substring(start + deleteCount, string.length);
};
exports.spliceString = spliceString;
