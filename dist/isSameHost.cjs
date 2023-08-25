'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isString = require('./isString.cjs');
const globalThis = require('./globalThis.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');

const isSameHost = (urlA, urlB = globalThis.default.location.href) => {
  if (!isString.isString(urlA)) {
    return false;
  }
  const $a = document.createElement("a");
  $a.href = urlA;
  const $b = document.createElement("a");
  $b.href = urlB;
  return $a.host === $b.host;
};

exports.default = isSameHost;
exports.isSameHost = isSameHost;
