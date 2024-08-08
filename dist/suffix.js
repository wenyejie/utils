import { isString } from "./isString.js";
const suffix = (string) => {
  if (!isString(string)) {
    console.error(`"${string}" is not a string`);
    return "";
  }
  string = string.trim();
  const {
    groups: { suffix: suffix2 }
  } = string.match(new RegExp("(?<=\\.)(?<suffix>\\w+)+$"));
  return suffix2;
};
export {
  suffix
};
