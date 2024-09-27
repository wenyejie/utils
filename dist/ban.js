import { isObject } from "./isObject.js";
const ban = (obj, ...rest) => {
  if (!isObject(obj)) {
    console.error(`"${obj}" is not a object`);
    return;
  }
  const result = { ...obj };
  rest.flat().forEach((key) => {
    delete result[key];
  });
  return result;
};
export {
  ban
};
