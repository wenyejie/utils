import { isObject } from './isObject.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const isArrInx = (arr, inx) => {
  return inx >= 0 && inx < arr.length;
};
const arrUpItem = (arr, inx) => {
  const delArr = arr.splice(inx, 1);
  arr.splice(inx - 1, 0, delArr?.[0]);
  return arr;
};
const arrDownItem = (arr, inx) => {
  const delArr = arr.splice(inx, 1);
  arr.splice(inx + 1, 0, delArr?.[0]);
  return arr;
};
const arrDelItemByVal = (array, ...values) => {
  for (const value of values) {
    const index = array.indexOf(value);
    array.splice(index, 1);
  }
  return array;
};
const arrDelItemByProp = (array, propKey, propValue) => {
  const propObj = isObject(propKey) ? propKey : { [propKey]: propValue };
  const propEntries = Object.entries(propObj);
  const index = array.findIndex((item) => {
    for (const [key, value] of propEntries) {
      if (item[key] !== value) {
        return false;
      }
    }
    return true;
  });
  if (index >= 0) {
    array.splice(index, 1);
  }
  return array;
};
const arrFindItemByProp = (array, prop, value) => {
  const props = isObject(prop) ? prop : { [prop]: value };
  const propEntries = Object.entries(props);
  return array.find((item) => {
    for (const [prop2, value2] of propEntries) {
      if (item[prop2] !== value2) {
        return false;
      }
    }
    return true;
  });
};
const arrFindValByProp = (array, propKey, propValue, rtnPropKey) => {
  let props;
  if (isObject(propKey)) {
    props = propKey;
    rtnPropKey = propValue;
  } else {
    props = { [propKey]: propValue };
  }
  const item = arrFindItemByProp(array, props);
  return item?.[rtnPropKey];
};

export { arrDelItemByProp, arrDelItemByVal, arrDownItem, arrFindItemByProp, arrFindValByProp, arrUpItem, isArrInx };
