"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const beforeHook = (fn, callback) => {
  return function(...args) {
    const newArgs = callback(...args);
    return fn.apply(this, newArgs);
  };
};
exports.beforeHook = beforeHook;
