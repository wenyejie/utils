"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const decimalLength = require("./decimalLength.cjs");
const toNumber = require("./toNumber.cjs");
const spliceString = require("./spliceString.cjs");
const isString = require("./isString.cjs");
const rightPad = (n, len) => {
  if (len === 0) {
    return n;
  }
  const dl = decimalLength.decimalLength(+n);
  let sn = n.toString();
  if (dl === 0) {
    sn += "".padEnd(len, "0");
  } else {
    sn = sn.replace(".", "");
    sn += "".padEnd(len - dl, "0");
  }
  return Number.parseFloat(sn);
};
const leftPad = (n, len) => {
  if (len === 0) {
    return n;
  }
  let sn = n.toString();
  const il = sn.length;
  if (len - il + 1 > 0) {
    sn = "".padEnd(len > il ? len - il + 1 : len - il, "0") + sn;
  }
  sn = spliceString.spliceString(sn, Math.abs(il - len), ".");
  return Number.parseFloat(sn);
};
const operationInit = (num1, num2) => {
  const raise = Math.max(decimalLength.decimalLength(+num1), decimalLength.decimalLength(+num2));
  return {
    n1: rightPad(toNumber.toNumber(num1), raise),
    n2: rightPad(toNumber.toNumber(num2), raise),
    raise
  };
};
const add = (num1, num2) => {
  const { n1, n2, raise } = operationInit(num1, num2);
  return leftPad(n1 + n2, raise);
};
const multiAdd = (...nums) => nums.reduce((accumulator, currentValue) => add(accumulator, currentValue));
const subtract = (num1, num2) => {
  const { n1, n2, raise } = operationInit(num1, num2);
  return leftPad(n1 - n2, raise);
};
const multiSubtract = (...nums) => nums.reduce((accumulator, currentValue) => subtract(accumulator, currentValue));
const multiply = (num1, num2) => {
  const { n1, n2, raise } = operationInit(num1, num2);
  return leftPad(n1 * n2, raise * 2);
};
const multiMultiply = (...nums) => nums.reduce((accumulator, currentValue) => multiply(accumulator, currentValue), 1);
const divide = (num1, num2) => {
  const { n1, n2 } = operationInit(num1, num2);
  return n1 / n2;
};
const multiDivide = (...nums) => nums.reduce((accumulator, currentValue) => divide(accumulator, currentValue));
const remain = (num1, num2) => {
  const result = divide(num1, num2);
  const r1 = multiply(result - Math.floor(result), num2);
  const r2 = +num1 % +num2;
  return r1.toString().length <= r2.toString().length ? r1 : r2;
};
const operates = Object.freeze({
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide,
  "%": remain
});
const rBracketsAndCon = /\([^()]+\)/g;
const rBrackets = /[()]/g;
const rSymbols = new RegExp("(?<=\\d|\\.)([%*/+-])", "g");
const rSpace = /\s+/g;
const arithmetic = (expression) => {
  expression = expression.replace(rSymbols, " $1 ");
  expression = expression.trim();
  let arr = expression.split(rSpace);
  if (arr.length <= 0) {
    return 0;
  }
  let index = -1;
  let result;
  do {
    index = arr.findIndex((item) => ["*", "/", "%"].includes(item));
    if (index < 0) {
      break;
    }
    result = operates[arr[index]](arr[index - 1], arr[index + 1]);
    arr.splice(index - 1, 3, `${result}`);
  } while (true);
  result = +arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === "+" || arr[i] === "-") {
      continue;
    }
    result = operates[arr[i - 1] || "+"](result, arr[i]);
  }
  return result;
};
const exactMath = (arithmeticStr) => {
  if (!isString.isString(arithmeticStr)) {
    return 0;
  }
  try {
    while (rBracketsAndCon.test(arithmeticStr)) {
      arithmeticStr = arithmeticStr.replace(rBracketsAndCon, (express) => {
        return arithmetic(express.replace(rBrackets, "")) + "";
      });
    }
    return arithmetic(arithmeticStr);
  } catch (err) {
    return 0;
  }
};
exports.add = add;
exports.arithmetic = arithmetic;
exports.divide = divide;
exports.exactMath = exactMath;
exports.multiAdd = multiAdd;
exports.multiDivide = multiDivide;
exports.multiMultiply = multiMultiply;
exports.multiSubtract = multiSubtract;
exports.multiply = multiply;
exports.remain = remain;
exports.subtract = subtract;
