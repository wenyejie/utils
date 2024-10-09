"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const utils = require("./utils.cjs");
const normalizeOptions = require("./normalizeOptions.cjs");
const isPositiveNumber = require("./isPositiveNumber.cjs");
const ONCE_DEFAULT_OPTIONS = {
  timeout: 0,
  needRemove: false
};
const once = (fn, options) => {
  const { timeout, needRemove } = normalizeOptions.normalizeOptions(options, ONCE_DEFAULT_OPTIONS);
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
exports.once = once;
