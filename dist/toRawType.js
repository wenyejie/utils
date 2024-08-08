import { decapitalize } from "./decapitalize.js";
const objectToString = Object.prototype.toString;
const toTypeString = (obj) => {
  return objectToString.call(obj).toLocaleLowerCase();
};
const toRawType = (obj) => {
  return decapitalize(toTypeString(obj).slice(8, -1));
};
export {
  objectToString,
  toRawType,
  toTypeString
};
