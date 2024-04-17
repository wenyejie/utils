"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isVoid = require("./isVoid.cjs");
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (obj, prop) => {
  if (isVoid.isVoid(obj)) {
    console.error(`"${obj}" is not a valid type`);
    return false;
  }
  return hasOwnProperty.call(obj, prop);
};
exports.hasOwn = hasOwn;
exports.hasOwnProperty = hasOwnProperty;
