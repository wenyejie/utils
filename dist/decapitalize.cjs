'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const decapitalize = (str) => {
  return str.charAt(0).toLowerCase() + str.slice(1);
};

exports.decapitalize = decapitalize;
exports.default = decapitalize;
