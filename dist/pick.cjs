"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isObject = require("./isObject.cjs");
const pick = (obj, ...rest) => {
  const result = {};
  if (isObject.isObject(obj)) {
    rest.forEach((key) => {
      result[key] = obj[key];
    });
  }
  return result;
};
exports.pick = pick;
