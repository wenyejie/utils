"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const randomInteger = (max, min = 0) => {
  const cMax = Math.max(max, min);
  const cMin = Math.min(max, min);
  return Math.floor(Math.random() * (cMax - cMin + 1)) + cMin;
};
exports.randomInteger = randomInteger;
