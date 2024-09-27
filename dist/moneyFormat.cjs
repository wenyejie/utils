"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isNumber = require("./isNumber.cjs");
const toNumber = require("./toNumber.cjs");
const nullProtoObject = require("./nullProtoObject.cjs");
const defaultOptions = {
  plusSign: false,
  type: "floor",
  // 向下取整
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
  padEnd: false
  // 是否尾部填充
};
const moneyFormat = (number, options) => {
  const opts = Object.assign(nullProtoObject.nullProtoObject(), defaultOptions, options);
  number = toNumber.toNumber(number);
  if (!isNumber.isNumber(number)) {
    return opts.default;
  }
  let [integer, decimal] = number.toString().split(".");
  if (decimal && opts.decimal > 0) {
    const next = decimal[opts.decimal];
    decimal = decimal.substring(0, opts.decimal);
    if (next) {
      switch (opts.type) {
        case "ceil":
          decimal = decimal.replace(/\d$/, (str) => {
            return (+str + 1).toString();
          });
          break;
        case "round":
          decimal = decimal.replace(/\d$/, (str) => {
            return +next >= 5 ? (+str + 1).toString() : str;
          });
          break;
      }
    }
  } else {
    decimal = "";
  }
  if (opts.padEnd && opts.decimal > 0) {
    decimal = decimal.padEnd(opts.decimal, "0");
  }
  if (decimal.length > 0) {
    decimal = "." + decimal;
  }
  integer = integer.replace(new RegExp("\\B(?=(\\d{" + opts.length + "})+(?!\\d))", "g"), opts.split);
  return opts.symbol + (number >= 0 && opts.plusSign ? "+" : "") + integer + decimal;
};
const numberFormat = moneyFormat;
exports.moneyFormat = moneyFormat;
exports.numberFormat = numberFormat;
