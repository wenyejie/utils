import { isString } from './isString.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const isJsonString = (obj) => {
  try {
    if (!isString(obj)) {
      return false;
    }
    return JSON.parse(obj) && true;
  } catch (e) {
    return false;
  }
};

export { isJsonString as default, isJsonString };
