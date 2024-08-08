"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isArray = require("./isArray.cjs");
const isObject = require("./isObject.cjs");
const objectLength = require("./objectLength.cjs");
const isEmptyValue = (obj) => {
  return obj === void 0 || obj === null || obj === "" || Number.isNaN(obj) || isArray.isArray(obj) && obj.length === 0 || isObject.isObject(obj) && objectLength.objectLength(obj) === 0;
};
exports.isEmptyValue = isEmptyValue;
