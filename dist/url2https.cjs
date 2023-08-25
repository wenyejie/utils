'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isString = require('./isString.cjs');
const regexp = require('./regexp.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');

const url2https = (url) => {
  if (!isString.isString(url)) {
    return "";
  }
  if (regexp.rHttps.test(url)) {
    return url;
  }
  return url.replace(regexp.rHttp, "https");
};

exports.default = url2https;
exports.url2https = url2https;
