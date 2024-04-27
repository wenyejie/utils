"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const dayEnd = (date) => {
  date.setHours(23, 59, 59, 999);
  return date;
};
exports.dayEnd = dayEnd;
