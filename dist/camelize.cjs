"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const camelizeRE = /-(\w)/g;
const camelize = (str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
};
exports.camelize = camelize;
