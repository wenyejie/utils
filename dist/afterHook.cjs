"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const afterHook = (fn, callback) => {
  return function(...args) {
    const result = fn.apply(this, args);
    return callback(result);
  };
};
exports.afterHook = afterHook;
