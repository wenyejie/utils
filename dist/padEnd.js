import { isUndefined } from "./isUndefined.js";
const padEnd = (obj, maxLength = 2, fillString = "0") => {
  if (isUndefined(obj) || Number.isNaN(obj)) {
    console.error(`"${obj}" is not a string or number`);
    obj = "";
  }
  return `${obj}`.padEnd(maxLength, fillString);
};
export {
  padEnd
};
