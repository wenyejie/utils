'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isPromise = (obj) => obj instanceof Promise;

exports.default = isPromise;
exports.isPromise = isPromise;
