'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isNumber = require('./isNumber.cjs');
const toNumber = require('./toNumber.cjs');
const nullProtoObject = require('./nullProtoObject.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');
require('./isString.cjs');

const defaultOptions = {
  decimal: 2,
  // 小数点长度
  symbol: "",
  // 钱币符号
  default: "",
  // 默认值
  split: ",",
  // 分隔符号
  length: 3,
  // 分割长度
  padEnd: true
  // 是否尾部填充
};
const moneyFormat = (number, options) => {
  options = Object.assign(
    nullProtoObject.nullProtoObject(),
    defaultOptions,
    options
  );
  number = toNumber.toNumber(number);
  if (!isNumber.isNumber(number)) {
    return options.default;
  }
  const result = number.toFixed(options.decimal);
  const numberSplit = result.split(".");
  if (!options.padEnd && numberSplit[1]) {
    numberSplit[1] = numberSplit[1].replace(/0+$/, "");
  }
  return options.symbol + numberSplit[0].replace(
    new RegExp("\\B(?=(\\d{" + options.length + "})+(?!\\d))", "g"),
    options.split
  ) + (numberSplit[1] ? "." + numberSplit[1] : "");
};

exports.default = moneyFormat;
exports.moneyFormat = moneyFormat;
