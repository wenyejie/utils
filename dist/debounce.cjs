"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const globalThis = require("./globalThis.cjs");
const normalizeOptions = require("./normalizeOptions.cjs");
const DEBOUNCE_DEFAULT_OPTIONS = {
  timeout: 500,
  immediate: false
};
const debounce = (fn, options) => {
  let timer = 0;
  let { immediate, timeout } = normalizeOptions.normalizeOptions(options, DEBOUNCE_DEFAULT_OPTIONS);
  return function(...args) {
    clearTimeout(timer);
    if (immediate) {
      fn.apply(this, args);
      immediate = false;
    }
    timer = globalThis.globalThis.setTimeout(fn.bind(this, args), timeout);
  };
};
exports.debounce = debounce;
