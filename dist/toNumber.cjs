"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isNumber = require("./isNumber.cjs");
const isString = require("./isString.cjs");
const toNumber = (num, defaultValue = 0) => {
  if (isString.isString(num)) {
    num = Number.parseFloat(num);
  }
  if (isNumber.isNumber(num)) {
    return num;
  }
  return defaultValue;
};
exports.toNumber = toNumber;
