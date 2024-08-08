"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isString = require("./isString.cjs");
const isNumberString = (obj) => {
  if (!isString.isString(obj)) {
    return false;
  }
  return (+obj).toString() === obj;
};
exports.isNumberString = isNumberString;
