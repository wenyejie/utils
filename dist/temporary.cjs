"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const CACHED_PLACEHOLDER = Symbol("CACHED_PLACEHOLDER");
const temporary = (fn, timeout = 500) => {
  let cached = CACHED_PLACEHOLDER;
  return function() {
    if (cached !== CACHED_PLACEHOLDER) {
      return cached;
    }
    cached = fn.apply(this, arguments);
    setTimeout(() => {
      cached = CACHED_PLACEHOLDER;
    }, timeout);
    return cached;
  };
};
exports.default = temporary;
exports.temporary = temporary;
