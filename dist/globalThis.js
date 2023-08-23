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
let gt;
try {
  gt = globalThis;
} catch (e) {
  gt = getGlobalThis();
}
const globalThis$1 = gt;

export { globalThis$1 as default, getGlobalThis, gt as globalThis };
