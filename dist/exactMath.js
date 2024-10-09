import { decimalLength } from "./decimalLength.js";
import { toNumber } from "./toNumber.js";
import { isString } from "./isString.js";
const toInteger = (num, length) => {
  return Math.ceil(num * Math.pow(10, length));
};
const toDecimal = (num, length) => {
  return num / Math.pow(10, length);
};
const operationInit = (num1, num2) => {
  const length = Math.max(decimalLength(+num1), decimalLength(+num2));
  return {
    n1: toInteger(toNumber(num1), length),
    n2: toInteger(toNumber(num2), length),
    length
  };
};
const add = (num1, num2) => {
  const { n1, n2, length } = operationInit(num1, num2);
  return toDecimal(n1 + n2, length);
};
const plus = add;
const multiAdd = (...nums) => nums.reduce((accumulator, currentValue) => add(accumulator, currentValue));
const multiPlus = multiAdd;
const subtract = (num1, num2) => {
  const { n1, n2, length } = operationInit(num1, num2);
  return toDecimal(n1 - n2, length);
};
const minus = subtract;
const multiSubtract = (...nums) => nums.reduce((accumulator, currentValue) => subtract(accumulator, currentValue));
const multiMinus = multiSubtract;
const multiply = (num1, num2) => {
  const n1Len = decimalLength(num1);
  const n2Len = decimalLength(num2);
  const n1 = toInteger(+num1, n1Len);
  const n2 = toInteger(+num2, n2Len);
  return toDecimal(n1 * n2, n1Len + n2Len);
};
const times = multiply;
const multiMultiply = (...nums) => nums.reduce((accumulator, currentValue) => multiply(accumulator, currentValue), 1);
const multiTimes = multiMultiply;
const divide = (num1, num2) => {
  const { n1, n2 } = operationInit(num1, num2);
  return n1 / n2;
};
const div = divide;
const multiDivide = (...nums) => nums.reduce((accumulator, currentValue) => divide(accumulator, currentValue));
const multiDiv = multiDivide;
const remain = (num1, num2) => {
  const result = divide(num1, num2);
  const r1 = multiply(result - Math.floor(result), num2);
  const r2 = +num1 % +num2;
  return r1.toString().length <= r2.toString().length ? r1 : r2;
};
const toFloor = (num, length = 0) => {
  num = toNumber(num);
  if (length < 0) {
    length = 0;
  }
  length = Math.floor(length);
  const base = Math.pow(10, length);
  return divide(Math.floor(times(num, base)), base);
};
const toCeil = (num, length = 0) => {
  num = toNumber(num);
  if (length < 0) {
    length = 0;
  }
  length = Math.floor(length);
  const base = Math.pow(10, length);
  return divide(Math.ceil(times(num, base)), base);
};
const operates = Object.freeze({
  "+": plus,
  "-": minus,
  "*": times,
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
  if (!isString(arithmeticStr)) {
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
export {
  add,
  arithmetic,
  div,
  divide,
  exactMath,
  minus,
  multiAdd,
  multiDiv,
  multiDivide,
  multiMinus,
  multiMultiply,
  multiPlus,
  multiSubtract,
  multiTimes,
  multiply,
  plus,
  remain,
  subtract,
  times,
  toCeil,
  toDecimal,
  toFloor,
  toInteger
};
