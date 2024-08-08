"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const arrDownItem = (arr, inx) => {
  const delArr = arr.splice(inx, 1);
  arr.splice(inx + 1, 0, delArr == null ? void 0 : delArr[0]);
  return arr;
};
const arrDownItemByValue = (arr, value) => {
  const index = arr.indexOf(value);
  if (index <= -1) {
    console.warn(`The value '${value}' is not included in the array '${arr}'`);
    return arr;
  }
  return arrDownItem(arr, index);
};
exports.arrDownItem = arrDownItem;
exports.arrDownItemByValue = arrDownItemByValue;
