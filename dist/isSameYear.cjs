"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toDate = require("./toDate.cjs");
const isDate = require("./isDate.cjs");
const isSameYear = (date1, date2) => {
  date1 = toDate.toDate(date1);
  date2 = toDate.toDate(date2);
  if (!isDate.isDate(date1) || !isDate.isDate(date2)) {
    console.error(`"${date1}" or "${date2}" is not a valid date`);
    return false;
  }
  return date1.getFullYear() === date2.getFullYear();
};
exports.isSameYear = isSameYear;
