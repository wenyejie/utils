'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = (str) => {
  return str.replace(hyphenateRE, "-$1").toLowerCase();
};

exports.default = hyphenate;
exports.hyphenate = hyphenate;
