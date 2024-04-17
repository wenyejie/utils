"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isObject = require("./isObject.cjs");
const arrFindItemByProp = require("./arrFindItemByProp.cjs");
const arrFindValByProp = (array, propKey, propValue, rtnPropKey) => {
  let props;
  if (isObject.isObject(propKey)) {
    props = propKey;
    rtnPropKey = propValue;
  } else {
    props = { [propKey]: propValue };
  }
  const item = arrFindItemByProp.arrFindItemByProp(array, props);
  return item == null ? void 0 : item[rtnPropKey];
};
exports.arrFindValByProp = arrFindValByProp;
