"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isNumber = require("./isNumber.cjs");
const isNegativeNumber = (obj) => isNumber.isNumber(obj) && obj < 0;
exports.isNegativeNumber = isNegativeNumber;
