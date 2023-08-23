'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const camelizeRE = /-(\w)/g;
const camelize = (str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
};

exports.camelize = camelize;
exports.default = camelize;
