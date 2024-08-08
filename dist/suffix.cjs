"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isString = require("./isString.cjs");
const suffix = (string) => {
  if (!isString.isString(string)) {
    console.error(`"${string}" is not a string`);
    return "";
  }
  string = string.trim();
  const {
    groups: { suffix: suffix2 }
  } = string.match(new RegExp("(?<=\\.)(?<suffix>\\w+)+$"));
  return suffix2;
};
exports.suffix = suffix;
