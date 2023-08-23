import { isString } from './isString.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const rSpace = /\s+/g;
const removeSpace = (string) => {
  if (!isString(string)) {
    return "";
  }
  return string.replace(rSpace, "");
};

export { removeSpace as default, removeSpace };
