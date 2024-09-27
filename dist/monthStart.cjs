"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const dayStart = require("./dayStart.cjs");
const monthStart = (date) => {
  date.setDate(1);
  dayStart.dayStart(date);
  return date;
};
exports.default = monthStart;
exports.monthStart = monthStart;
