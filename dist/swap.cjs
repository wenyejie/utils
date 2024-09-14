"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const swap = (obj, i, j) => {
  if (!Object.hasOwn(obj, i) || !Object.hasOwn(obj, j)) {
    return obj;
  }
  const temp = obj[i];
  obj[i] = obj[j];
  obj[j] = temp;
  return obj;
};
exports.swap = swap;
