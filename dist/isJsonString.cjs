"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isString = require("./isString.cjs");
const isJsonString = (obj) => {
  if (!isString.isString(obj)) {
    return false;
  }
  try {
    JSON.parse(obj);
    return true;
  } catch (e) {
    return false;
  }
};
exports.isJsonString = isJsonString;
