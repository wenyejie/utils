"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const zipObject = (props, values) => {
  const result = {};
  for (const [index, key] of props.entries()) {
    result[key] = values[index];
  }
  return result;
};
exports.zipObject = zipObject;
