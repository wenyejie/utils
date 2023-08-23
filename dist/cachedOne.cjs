'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const once = require('./once.cjs');

const cachedOne = once.once;

exports.cachedOne = cachedOne;
exports.default = cachedOne;
