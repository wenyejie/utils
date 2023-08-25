import { isString } from './isString.js';
import { isNumber } from './isNumber.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';

const spliceString = (string, start, deleteCount = 0, insertString = "") => {
  if (!isString(string)) {
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

export { spliceString as default, spliceString };
