'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isString = require('./isString.cjs');
const removeSpace = require('./removeSpace.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const bankCardFormat = (card) => {
  if (!isString.isString(card)) {
    return "";
  }
  return removeSpace.removeSpace(card).replace(/(\d{4}(?=\d))/g, "$1 ");
};

exports.bankCardFormat = bankCardFormat;
exports.default = bankCardFormat;
