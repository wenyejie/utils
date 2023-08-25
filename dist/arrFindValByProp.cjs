'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isObject = require('./isObject.cjs');
const arrFindItemByProp = require('./arrFindItemByProp.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');

const arrFindValByProp = (array, propKey, propValue, rtnPropKey) => {
  let props;
  if (isObject.isObject(propKey)) {
    props = propKey;
    rtnPropKey = propValue;
  } else {
    props = { [propKey]: propValue };
  }
  const item = arrFindItemByProp.arrFindItemByProp(array, props);
  return item?.[rtnPropKey];
};

exports.arrFindValByProp = arrFindValByProp;
exports.default = arrFindValByProp;
