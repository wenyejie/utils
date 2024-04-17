"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toDate = require("./toDate.cjs");
const isDate = require("./isDate.cjs");
const dateObj = (date = /* @__PURE__ */ new Date()) => {
  let result = {};
  date = toDate.toDate(date);
  if (isDate.isDate(date)) {
    result = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      week: date.getDay(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
      millisecond: date.getMilliseconds(),
      time: date.getTime()
    };
  } else {
    console.error("dateObj params error", date);
  }
  return result;
};
exports.dateObj = dateObj;
