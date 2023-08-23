'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isElement = (obj) => obj?.nodeType === 1;

exports.default = isElement;
exports.isElement = isElement;
