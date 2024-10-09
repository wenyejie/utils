"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const once = require("./once.cjs");
const normalizeOptions = require("./normalizeOptions.cjs");
const TEMPORARY_DEFAULT_OPTIONS = {
  timeout: 500,
  needRemove: false
};
const temporary = (fn, options) => once.once(fn, normalizeOptions.normalizeOptions(options, TEMPORARY_DEFAULT_OPTIONS));
exports.temporary = temporary;
