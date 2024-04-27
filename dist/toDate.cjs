"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isDate = require("./isDate.cjs");
const isNumber = require("./isNumber.cjs");
const isString = require("./isString.cjs");
const regexp = require("./regexp.cjs");
const isInvalidDate = require("./isInvalidDate.cjs");
const isObject = require("./isObject.cjs");
const nullProtoObject = require("./nullProtoObject.cjs");
const normalizedOptions = (options) => {
  const normalized = nullProtoObject.nullProtoObject();
  if (typeof options === "boolean") {
    normalized.toNew = options;
  } else if (isObject.isObject(options)) {
    Object.assign(normalized, options);
  } else {
    normalized.defaultValue = options;
  }
  return normalized;
};
const toDate = (date, options) => {
  const innerOptions = normalizedOptions(options);
  if (!date || isInvalidDate.isInvalidDate(date)) {
    console.error(`"${date}" is not valid date`);
    return innerOptions.defaultValue;
  }
  if (isDate.isDate(date)) {
    return innerOptions.toNew ? new Date(date) : date;
  }
  if (isString.isString(date)) {
    if (regexp.rInteger.test(date)) {
      date = Number.parseInt(date);
    } else if (regexp.rIOSDateStringFormat.test(date)) {
      date = date.replace(/-/g, "/");
    }
  }
  if (isNumber.isNumber(date)) {
    let ts = Number.parseInt(date + "") + "";
    if (ts.length > 13) {
      ts = ts.substring(0, 13);
    } else if (ts.length < 13) {
      ts = ts.padEnd(13, "0");
    }
    date = Number.parseInt(ts);
  }
  date = new Date(date);
  if (isInvalidDate.isInvalidDate(date)) {
    return innerOptions.defaultValue;
  }
  return date;
};
exports.toDate = toDate;
