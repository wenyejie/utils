'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isString = require('./isString.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');

const prefix = (string) => {
  if (!isString.isString(string)) {
    return "";
  }
  string = string.trim();
  const { groups: { prefix: prefix2 } } = string.match(/^(?<prefix>\w+)+(?=\.)/);
  return prefix2;
};

exports.default = prefix;
exports.prefix = prefix;
