"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const cached = (fn) => {
  const caches = {};
  return function(...args) {
    const argsStr = args.join(",");
    if (argsStr in caches) {
      return caches[argsStr];
    }
    caches[argsStr] = fn.apply(this, args);
    return caches[argsStr];
  };
};
exports.cached = cached;
