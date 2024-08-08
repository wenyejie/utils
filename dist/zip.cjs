"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const zip = (...arrays) => {
  const result = [];
  if (arrays.length <= 0) {
    return result;
  }
  for (let i = 0; i < arrays[0].length; i++) {
    result[i] = [];
    for (let j = 0; j < arrays.length; j++) {
      result[i].push(arrays[j][i]);
    }
  }
  return result;
};
exports.zip = zip;
