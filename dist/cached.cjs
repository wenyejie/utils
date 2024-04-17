"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const cached = (fn) => {
  const caches = {};
  return function() {
    const args = Array.prototype.join.call(arguments, ",");
    if (args in caches) {
      return caches[args];
    }
    return caches[args] = fn.apply(this, arguments);
  };
};
exports.cached = cached;
