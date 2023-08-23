'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isInteger = require('./isInteger.cjs');

const isOddNumber = (number) => isInteger.isInteger(number) && number % 2 === 1;

exports.default = isOddNumber;
exports.isOddNumber = isOddNumber;
