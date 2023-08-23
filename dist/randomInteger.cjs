'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const randomInteger = (max, min = 0) => {
  const cMax = Math.max(max, min);
  const cMin = Math.min(max, min);
  return Math.floor(Math.random() * (cMax - cMin + 1)) + cMin;
};

exports.default = randomInteger;
exports.randomInteger = randomInteger;
