import { isObject } from "./isObject.js";
const pick = (obj, ...rest) => {
  const result = {};
  if (isObject(obj)) {
    rest.forEach((key) => {
      result[key] = obj[key];
    });
  }
  return result;
};
export {
  pick
};
