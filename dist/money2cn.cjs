'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toNumber = require('./toNumber.cjs');
require('./isNumber.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');
require('./isString.cjs');

const fraction = ["角", "分"];
const digit = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
const numberDigit = ["", "拾", "佰", "仟"];
const unit = ["", "万", "亿"];
const rNumberDigit = /零[拾佰仟]/g;
const rUnit = /零+([万亿])/g;
const rZero = /零{2,}/;
const money2cn = (n) => {
  n = toNumber.toNumber(n);
  let result;
  const integerAry = n.toString().replace(/\.\d+$/, "").split("");
  const decimalAry = n.toString().replace(/^\d+\.?/, "").split("");
  for (let i = integerAry.length - 1, j = 0; i >= 0; i--, j++) {
    if (integerAry[i] === "0" && i > 0 && i < integerAry.length - 1) {
      integerAry[i] = "零";
    } else {
      integerAry[i] = digit[integerAry[i]] + numberDigit[j % 4];
    }
    integerAry[i] += j % 4 === 0 ? unit[j / 4] : "";
  }
  for (let i = 0; i < decimalAry.length; i++) {
    if (decimalAry[i] !== "0") {
      decimalAry[i] = digit[decimalAry[i]] + fraction[i];
    } else {
      decimalAry[i] = "";
    }
  }
  let integer = integerAry.join("").replace(rNumberDigit, "").replace(rUnit, "$1").replace(rZero, "零");
  if (integer.length > 1) {
    integer = integer.replace(/零$/, "");
  }
  if (integer.length >= 1) {
    integer += "元";
  }
  let decimal = decimalAry.join("");
  if (decimal === "") {
    decimal = "整";
  } else {
    integer = integer.replace(/^零元$/, "");
  }
  result = integer + decimal;
  return result;
};

exports.default = money2cn;
exports.money2cn = money2cn;
