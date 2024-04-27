"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const globalThis = require("./globalThis.cjs");
const normalizeOptions = require("./normalizeOptions.cjs");
const DEBOUNCE_DEFAULT_OPTIONS = {
  timeout: 500,
  immediate: false
};
const DEBOUNCE_TYPES = {
  "number": "timeout",
  "boolean": "immediate"
};
const debounce = (fn, options) => {
  let timer = 0;
  const { immediate, timeout } = normalizeOptions.normalizeOptions(options, DEBOUNCE_TYPES, DEBOUNCE_DEFAULT_OPTIONS);
  let innerImmediate = immediate;
  return function(...rest) {
    clearTimeout(timer);
    if (innerImmediate) {
      fn.apply(this, rest);
      innerImmediate = false;
    }
    timer = globalThis.globalThis.setTimeout(fn.bind(this, rest), timeout);
  };
};
exports.debounce = debounce;
