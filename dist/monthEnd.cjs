"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const dayEnd = require("./dayEnd.cjs");
const monthEnd = (date) => {
  date.setMonth(date.getMonth() + 1, 0);
  dayEnd.dayEnd(date);
  return date;
};
exports.monthEnd = monthEnd;
