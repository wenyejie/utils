'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isInteger = require('./isInteger.cjs');

const isNaturalNumber = (obj) => isInteger.isInteger(obj) && obj >= 0;

exports.default = isNaturalNumber;
exports.isNaturalNumber = isNaturalNumber;
