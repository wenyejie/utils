"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isNumber = require("./isNumber.cjs");
const isString = require("./isString.cjs");
const INTEGER_BIT = /^\d+\.?/;
const decimalLength = (number) => {
  if (isString.isString(number)) {
    number = +number;
  }
  if (!isNumber.isNumber(number)) {
    console.error(`"${number}" is not a number`);
    return 0;
  }
  return `${number}`.replace(INTEGER_BIT, "").length;
};
exports.decimalLength = decimalLength;
