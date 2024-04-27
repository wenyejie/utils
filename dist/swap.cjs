"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const hasOwn = require("./hasOwn.cjs");
const swap = (obj, i, j) => {
  if (!hasOwn.hasOwn(obj, i) || !hasOwn.hasOwn(obj, j)) {
    return obj;
  }
  const temp = obj[i];
  obj[i] = obj[j];
  obj[j] = temp;
  return obj;
};
exports.swap = swap;
