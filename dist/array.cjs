'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const isArray = require('./isArray.cjs');
const isNaturalNumber = require('./isNaturalNumber.cjs');
const isObject = require('./isObject.cjs');
const hasOwn = require('./hasOwn.cjs');
require('./isInteger.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./hasOwnProperty.cjs');
require('./isUndefined.cjs');
require('./isNull.cjs');

const isTrulyArrInx = (arr, inx) => {
  return isArray.isArray(arr) && isNaturalNumber.isNaturalNumber(inx) && arr.length > inx;
};
const arrUpItem = (arr, item, inx) => {
  arr.splice(inx, 1);
  arr.splice(inx - 1, 0, item);
  return arr;
};
const arrDownItem = (arr, item, inx) => {
  arr.splice(inx, 1);
  arr.splice(inx + 1, 0, item);
  return arr;
};
const arrDelItemByInx = (arr, inx) => {
  return arr.splice(inx, 1);
};
const arrDelItemByProp = (array, key, value) => {
  const props = isObject.isObject(key) ? key : { [key]: value };
  if (!isArray.isArray(array) || !isObject.isObject(props)) {
    return array;
  }
  return array.filter((item) => {
    for (let key2 in props) {
      if (hasOwn.hasOwn(item, key2) && item[key2] !== props[key2]) {
        return true;
      }
    }
    return false;
  });
};
const arrDelItemByVal = (array, value) => {
  if (!isArray.isArray(array) || array.length <= 0) {
    return array;
  }
  const index = array.indexOf(value);
  if (index >= 0 && index < array.length) {
    array.splice(index, 1);
  }
  return array;
};
const arrDelManyItemByVal = (array, ...values) => {
  if (!isArray.isArray(array) || values.length === 0) {
    return array;
  }
  for (let i = 0; i < values.length; i++) {
    arrDelItemByVal(array, values[i]);
  }
  return array;
};

exports.arrDelItemByInx = arrDelItemByInx;
exports.arrDelItemByProp = arrDelItemByProp;
exports.arrDelItemByVal = arrDelItemByVal;
exports.arrDelManyItemByVal = arrDelManyItemByVal;
exports.arrDownItem = arrDownItem;
exports.arrUpItem = arrUpItem;
exports.isTrulyArrInx = isTrulyArrInx;
