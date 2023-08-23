'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isString = require('./isString.cjs');
const isNumber = require('./isNumber.cjs');
const exactMath = require('./exactMath.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decimalLength.cjs');
require('./toNumber.cjs');
require('./spliceString.cjs');

const defaultOptions = {
  fractionDigits: 2,
  // 保留小数位
  padEnd: false,
  // 是否需要后续补零
  defaultValue: "",
  // 默认值, 即当输入值无法被转化时显示的值
  onePercent: 0.01,
  // 百分之一的数值, 0.01 * 100 = 1, 1 * 100 = 100
  symbol: "%"
  // 百分比符号
};
const percentage = (value, options = {}) => {
  options = Object.assign({}, defaultOptions, options);
  if (isString.isString(value)) {
    if (value.includes(options.symbol)) {
      return value;
    }
    value = Number.parseFloat(value);
  }
  if (!isNumber.isNumber(value)) {
    return options.defaultValue;
  }
  value = exactMath.divide(value, options.onePercent);
  value = value.toFixed(options.fractionDigits);
  if (!options.padEnd) {
    value = Number.parseFloat(value);
  }
  return `${value}${options.symbol}`;
};

exports.default = percentage;
exports.percentage = percentage;
