import { isNumber } from './isNumber.js';
import { toNumber } from './toNumber.js';
import { nullProtoObject } from './nullProtoObject.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './isString.js';

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
    nullProtoObject(),
    defaultOptions,
    options
  );
  number = toNumber(number);
  if (!isNumber(number)) {
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

export { moneyFormat as default, moneyFormat };
