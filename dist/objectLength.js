import { isObject } from "./isObject.js";
const objectLength = (obj) => {
  if (!isObject(obj)) {
    console.error(`"${obj}" is not a Object`);
    return 0;
  }
  return Object.keys(obj).length;
};
export {
  objectLength
};
