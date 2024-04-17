"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const decapitalize = require("./decapitalize.cjs");
const objectToString = Object.prototype.toString;
const toTypeString = (obj) => {
  return objectToString.call(obj).toLocaleLowerCase();
};
const toRawType = (obj) => {
  return decapitalize.decapitalize(toTypeString(obj).slice(8, -1));
};
exports.objectToString = objectToString;
exports.toRawType = toRawType;
exports.toTypeString = toTypeString;
