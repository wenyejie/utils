"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const globalThis = require("./globalThis.cjs");
const normalizeOptions = require("./normalizeOptions.cjs");
const DEFAULT_OPTIONS = {
  timeout: 500,
  immediate: false
};
const THROTTLE_TYPES = {
  "number": "timeout",
  "boolean": "immediate"
};
const throttle = (fn, options) => {
  let timer = 0;
  const { immediate, timeout } = normalizeOptions.normalizeOptions(options, THROTTLE_TYPES, DEFAULT_OPTIONS);
  let innerImmediate = immediate;
  return function(...rest) {
    if (innerImmediate) {
      fn.apply(this, rest);
      innerImmediate = false;
      return;
    }
    if (timer) {
      return;
    }
    timer = globalThis.globalThis.setTimeout(() => {
      clearTimeout(timer);
      fn.apply(this, rest);
    }, timeout);
  };
};
exports.throttle = throttle;
