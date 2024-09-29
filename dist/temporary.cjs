"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const utils = require("./utils.cjs");
const normalizeOptions = require("./normalizeOptions.cjs");
const isPositiveNumber = require("./isPositiveNumber.cjs");
const TEMPORARY_DEFAULT_OPTIONS = {
  timeout: 500,
  needRemove: false
};
const temporary = (fn, options) => {
  const { timeout, needRemove } = normalizeOptions.normalizeOptions(options, TEMPORARY_DEFAULT_OPTIONS);
  let cached = utils.PLACEHOLDER;
  let timer = 0;
  const rtnFn = function() {
    if (cached !== utils.PLACEHOLDER) {
      return cached;
    }
    cached = fn.apply(this, arguments);
    if (isPositiveNumber.isPositiveNumber(timeout)) {
      timer = window.setTimeout(() => cached = utils.PLACEHOLDER, timeout);
    }
    return cached;
  };
  if (needRemove) {
    return [
      rtnFn,
      () => {
        clearTimeout(timer);
        cached = utils.PLACEHOLDER;
      }
    ];
  } else {
    return rtnFn;
  }
};
exports.default = temporary;
exports.temporary = temporary;
