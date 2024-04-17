"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isDate = (obj) => obj instanceof Date && obj.toString() !== "Invalid Date";
exports.isDate = isDate;
