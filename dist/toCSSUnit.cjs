"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isNumber = require("./isNumber.cjs");
const isString = require("./isString.cjs");
const regexp = require("./regexp.cjs");
const toCSSUnit = (value, unit = "px") => {
  if (isNumber.isNumber(value) || regexp.rInteger.test(value)) {
    return value + unit;
  } else if (isString.isString(value)) {
    return value;
  } else {
    return "";
  }
};
exports.toCSSUnit = toCSSUnit;
