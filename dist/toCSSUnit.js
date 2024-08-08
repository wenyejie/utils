import { isNumber } from "./isNumber.js";
import { isString } from "./isString.js";
import { rInteger } from "./regexp.js";
const toCSSUnit = (value, unit = "px") => {
  if (isNumber(value) || rInteger.test(value)) {
    return value + unit;
  } else if (isString(value)) {
    return value;
  } else {
    return "";
  }
};
export {
  toCSSUnit
};
