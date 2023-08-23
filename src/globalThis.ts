/**
 * 获取globalThis
 */
export const getGlobalThis = ():Window & typeof globalThis => {
  if (typeof self !== "undefined") {
    return self as Window & typeof globalThis;
  }
  if (typeof window !== "undefined") {
    return window as Window & typeof globalThis
  }
  if (typeof global !== "undefined") {
    return global as Window & typeof globalThis
  }
  throw new Error("unable to locate global object");
};

let gt:Window & typeof globalThis

try {
  gt = <Window & typeof globalThis>globalThis
} catch (e) {
  gt = getGlobalThis()
}


export {
  gt as globalThis
}

export default gt as Window & typeof globalThis
