'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isInteger = require('./isInteger.cjs');

const isEvenNumber = (obj) => isInteger.isInteger(obj) && obj % 2 === 0;

exports.default = isEvenNumber;
exports.isEvenNumber = isEvenNumber;
