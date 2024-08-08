import { isObject } from "./isObject.js";
const ban = (obj, ...rest) => {
  if (!isObject(obj)) {
    console.error(`"${obj}" is not a object`);
    return;
  }
  let result = {};
  result = { ...obj };
  rest.forEach((key) => {
    delete result[key];
  });
  return result;
};
export {
  ban
};
