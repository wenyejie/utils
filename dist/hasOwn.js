import { isVoid } from "./isVoid.js";
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (obj, prop) => {
  if (isVoid(obj)) {
    console.error(`"${obj}" is not a valid type`);
    return false;
  }
  return hasOwnProperty.call(obj, prop);
};
export {
  hasOwn,
  hasOwnProperty
};
