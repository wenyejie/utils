"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const getGlobalThis = () => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  } else if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else if (typeof global !== "undefined") {
    return global;
  } else {
    return Function("return this")();
  }
};
exports.globalThis = void 0;
try {
  exports.globalThis = globalThis;
} catch {
  exports.globalThis = getGlobalThis();
}
