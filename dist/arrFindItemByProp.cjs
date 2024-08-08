"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isObject = require("./isObject.cjs");
const arrFindItemByProp = (array, prop, value) => {
  const props = isObject.isObject(prop) ? prop : { [prop]: value };
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
exports.arrFindItemByProp = arrFindItemByProp;
