"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isNumber = require("./isNumber.cjs");
const isPositiveNumber = (obj) => isNumber.isNumber(obj) && obj > 0;
exports.isPositiveNumber = isPositiveNumber;
