"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isObject = require("./isObject.cjs");
const objectLength = (obj) => {
  if (!isObject.isObject(obj)) {
    console.error(`"${obj}" is not a Object`);
    return 0;
  }
  return Object.keys(obj).length;
};
exports.objectLength = objectLength;
