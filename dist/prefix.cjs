"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isString = require("./isString.cjs");
const prefix = (string) => {
  if (!isString.isString(string)) {
    console.error(`"${string}" is not a string`);
    return "";
  }
  string = string.trim();
  const {
    groups: { prefix: prefix2 }
  } = string.match(/^(?<prefix>\w+)+(?=\.)/);
  return prefix2;
};
exports.prefix = prefix;
