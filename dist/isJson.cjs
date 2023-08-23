'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isJson = (obj) => {
  try {
    return JSON.stringify(obj) && true;
  } catch (e) {
    return false;
  }
};

exports.default = isJson;
exports.isJson = isJson;
