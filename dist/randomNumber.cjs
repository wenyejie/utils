'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const randomNumber = (max, min = 0) => {
  const cMax = Math.max(max, min);
  const cMin = Math.min(max, min);
  return Math.random() * (cMax - cMin) + cMin;
};

exports.default = randomNumber;
exports.randomNumber = randomNumber;
