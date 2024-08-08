"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isObject = require("./isObject.cjs");
const arrDelItemByProp = (array, propKey, propValue) => {
  const propObj = isObject.isObject(propKey) ? propKey : { [propKey]: propValue };
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
exports.arrDelItemByProp = arrDelItemByProp;
