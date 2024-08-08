"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const once = (fn) => {
  let cached;
  return function() {
    return cached || (cached = fn.apply(this, arguments));
  };
};
exports.once = once;
