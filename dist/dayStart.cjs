"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const dayStart = (date) => {
  date.setHours(0, 0, 0, 0);
  return date;
};
exports.dayStart = dayStart;
