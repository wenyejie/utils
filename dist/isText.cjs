'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isText = (obj) => obj?.nodeType === 3;

exports.default = isText;
exports.isText = isText;
