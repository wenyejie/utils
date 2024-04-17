"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const arrDownItem = (arr, inx) => {
  const delArr = arr.splice(inx, 1);
  arr.splice(inx + 1, 0, delArr == null ? void 0 : delArr[0]);
  return arr;
};
exports.arrDownItem = arrDownItem;
