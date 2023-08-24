'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const arrDownItem = (arr, inx) => {
  const delArr = arr.splice(inx, 1);
  arr.splice(inx + 1, 0, delArr?.[0]);
  return arr;
};

exports.arrDownItem = arrDownItem;
exports.default = arrDownItem;
