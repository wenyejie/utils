'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const phoneNumFormat = require('./phoneNumFormat.cjs');
require('./isString.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');
require('./isInteger.cjs');

const mobilePhoneFormat = phoneNumFormat.phoneNumFormat;

exports.default = mobilePhoneFormat;
exports.mobilePhoneFormat = mobilePhoneFormat;
