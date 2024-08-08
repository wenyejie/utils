import { isString } from "./isString.js";
import { isNumber } from "./isNumber.js";
const spliceString = (string, start, deleteCount = 0, insertString = "") => {
  if (!isString(string)) {
    console.error(`"${string}" is not a string`);
    return "";
  }
  if (!isNumber(deleteCount) && insertString === "") {
    insertString = deleteCount;
    deleteCount = 0;
  }
  if (start < 0 || string.length < start || deleteCount < 0) {
    return string;
  }
  return string.substring(0, start) + insertString + string.substring(start + deleteCount, string.length);
};
export {
  spliceString
};
