'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isComment = (obj) => obj?.nodeType === 8;

exports.default = isComment;
exports.isComment = isComment;
