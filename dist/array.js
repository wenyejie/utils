import { isArray } from './isArray.js';
import { isNaturalNumber } from './isNaturalNumber.js';
import { isObject } from './isObject.js';
import { hasOwn } from './hasOwn.js';
import './isInteger.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './hasOwnProperty.js';
import './isUndefined.js';
import './isNull.js';

const isTrulyArrInx = (arr, inx) => {
  return isArray(arr) && isNaturalNumber(inx) && arr.length > inx;
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
  const props = isObject(key) ? key : { [key]: value };
  if (!isArray(array) || !isObject(props)) {
    return array;
  }
  return array.filter((item) => {
    for (let key2 in props) {
      if (hasOwn(item, key2) && item[key2] !== props[key2]) {
        return true;
      }
    }
    return false;
  });
};
const arrDelItemByVal = (array, value) => {
  if (!isArray(array) || array.length <= 0) {
    return array;
  }
  const index = array.indexOf(value);
  if (index >= 0 && index < array.length) {
    array.splice(index, 1);
  }
  return array;
};
const arrDelManyItemByVal = (array, ...values) => {
  if (!isArray(array) || values.length === 0) {
    return array;
  }
  for (let i = 0; i < values.length; i++) {
    arrDelItemByVal(array, values[i]);
  }
  return array;
};

export { arrDelItemByInx, arrDelItemByProp, arrDelItemByVal, arrDelManyItemByVal, arrDownItem, arrUpItem, isTrulyArrInx };
