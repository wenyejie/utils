"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isDate = require("./isDate.cjs");
const utils = require("./utils.cjs");
const padStart = require("./padStart.cjs");
const DEFAULT_OPTIONS = {
  types: ["year", "week", "day", "hour", "minute", "second"],
  padStart: false
};
const normalizedOptions = (options) => {
  const innerOptions = { ...DEFAULT_OPTIONS };
  if (isDate.isDate(options)) {
    innerOptions.compare = options;
  } else if (Array.isArray(options)) {
    innerOptions.types = options;
  } else {
    Object.assign(innerOptions, options);
  }
  return innerOptions;
};
const datetimeSpan = (date, options) => {
  const { compare, types, padStart: padResult } = normalizedOptions(options);
  let timestamp = isDate.isDate(date) ? Math.abs(date.getTime() - (compare ?? /* @__PURE__ */ new Date()).getTime()) : Number.parseInt(date);
  const result = {};
  for (const type of types) {
    const data = Math.floor(timestamp / utils.TS_UNIT[type.toUpperCase()]);
    result[type] = padResult ? padStart.padStart(data) : data;
    timestamp %= utils.TS_UNIT[type.toUpperCase()];
  }
  return result;
};
exports.datetimeSpan = datetimeSpan;
