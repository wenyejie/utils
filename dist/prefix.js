import { isString } from "./isString.js";
const prefix = (string) => {
  if (!isString(string)) {
    console.error(`"${string}" is not a string`);
    return "";
  }
  string = string.trim();
  const {
    groups: { prefix: prefix2 }
  } = string.match(/^(?<prefix>\w+)+(?=\.)/);
  return prefix2;
};
export {
  prefix
};
