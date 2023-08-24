'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const arrDelItemByVal = (array, ...values) => {
  for (const value of values) {
    const index = array.indexOf(value);
    array.splice(index, 1);
  }
  return array;
};

exports.arrDelItemByVal = arrDelItemByVal;
exports.default = arrDelItemByVal;
