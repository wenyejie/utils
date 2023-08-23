'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isString = require('./isString.cjs');
const regexp = require('./regexp.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const url2http = (url) => {
  if (!isString.isString(url)) {
    return "";
  }
  if (!regexp.rHttp.test(url)) {
    return url;
  }
  return url.replace(regexp.rHttps, "http");
};

exports.default = url2http;
exports.url2http = url2http;
