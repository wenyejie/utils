"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isJson = (obj) => {
  try {
    return JSON.stringify(obj) && true;
  } catch (e) {
    return false;
  }
};
exports.isJson = isJson;
