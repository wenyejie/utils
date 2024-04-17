"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toDate = require("./toDate.cjs");
const getDaysByMonth = (date) => {
  date = toDate.toDate(date);
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};
exports.getDaysByMonth = getDaysByMonth;
