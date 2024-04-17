import { isArray } from "./isArray.js";
import { isObject } from "./isObject.js";
import { objectLength } from "./objectLength.js";
const isEmptyValue = (obj) => {
  return obj === void 0 || obj === null || obj === "" || Number.isNaN(obj) || isArray(obj) && obj.length === 0 || isObject(obj) && objectLength(obj) === 0;
};
export {
  isEmptyValue
};
