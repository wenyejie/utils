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
let gt;
try {
  gt = globalThis;
} catch {
  gt = getGlobalThis();
}
const globalThis$1 = gt;

export { globalThis$1 as default, gt as globalThis };
