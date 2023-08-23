'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const load = require('./load.cjs');
require('./isFunction.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./isObject.cjs');
require('./hasOwn.cjs');
require('./hasOwnProperty.cjs');
require('./isUndefined.cjs');
require('./isNull.cjs');

const loadScript = (url, options) => {
  return load.load("script", url, options);
};

exports.default = loadScript;
exports.loadScript = loadScript;
