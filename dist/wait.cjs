"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const wait = (time = 300) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
exports.wait = wait;
