import { isString } from "./isString.js";
const isNumberString = (obj) => {
  if (!isString(obj)) {
    return false;
  }
  return (+obj).toString() === obj;
};
export {
  isNumberString
};
