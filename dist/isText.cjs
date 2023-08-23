'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isText = (obj) => obj ? obj.nodeType === 3 : false;

exports.default = isText;
exports.isText = isText;
