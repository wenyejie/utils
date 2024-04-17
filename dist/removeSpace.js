import { isString } from "./isString.js";
const rSpace = /\s+/g;
const removeSpace = (string) => {
  if (!isString(string)) {
    console.error(`"${string}" is not a string`);
    return "";
  }
  return string.replace(rSpace, "");
};
export {
  removeSpace
};
