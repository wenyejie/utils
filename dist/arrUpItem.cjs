"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const arrUpItem = (arr, inx) => {
  const delArr = arr.splice(inx, 1);
  arr.splice(inx - 1, 0, delArr == null ? void 0 : delArr[0]);
  return arr;
};
const arrUpItemByValue = (arr, value) => {
  const index = arr.indexOf(value);
  if (index <= -1) {
    console.warn(`The value '${value}' is not included in the array '${arr}'`);
    return arr;
  }
  return arrUpItem(arr, index);
};
exports.arrUpItem = arrUpItem;
exports.arrUpItemByValue = arrUpItemByValue;
