"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const dayStart = require("./dayStart.cjs");
const monthStart = (date) => {
  date.setDate(1);
  dayStart.dayStart(date);
  return date;
};
exports.monthStart = monthStart;
