'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isString = require('./isString.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const suffix = (string) => {
  if (!isString.isString(string)) {
    return "";
  }
  string = string.trim();
  const { groups: { suffix: suffix2 } } = string.match(/(?<=\.)(?<suffix>\w+)+$/);
  return suffix2;
};

exports.default = suffix;
exports.suffix = suffix;
