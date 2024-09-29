"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const wait = (time = 300) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
exports.default = wait;
exports.wait = wait;
