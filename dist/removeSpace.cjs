"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isString = require("./isString.cjs");
const rSpace = /\s+/g;
const removeSpace = (string) => {
  if (!isString.isString(string)) {
    console.error(`"${string}" is not a string`);
    return "";
  }
  return string.replace(rSpace, "");
};
exports.removeSpace = removeSpace;
