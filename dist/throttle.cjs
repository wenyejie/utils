"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const globalThis = require("./globalThis.cjs");
const normalizeOptions = require("./normalizeOptions.cjs");
const DEFAULT_OPTIONS = {
  timeout: 500,
  immediate: false
};
const throttle = (fn, options) => {
  let timer = 0;
  let { immediate, timeout } = normalizeOptions.normalizeOptions(options, DEFAULT_OPTIONS);
  return function(...args) {
    if (immediate) {
      fn.apply(this, args);
      immediate = false;
      return;
    }
    if (timer) {
      return;
    }
    timer = globalThis.globalThis.setTimeout(() => {
      clearTimeout(timer);
      timer = 0;
      fn.apply(this, args);
    }, timeout);
  };
};
exports.throttle = throttle;
