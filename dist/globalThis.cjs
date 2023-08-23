'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const getGlobalThis = () => {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
};
exports.globalThis = void 0;
try {
  exports.globalThis = globalThis;
} catch (e) {
  exports.globalThis = getGlobalThis();
}
const globalThis$1 = exports.globalThis;

exports.default = globalThis$1;
exports.getGlobalThis = getGlobalThis;
