import { isObject } from './isObject.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';

const pick = (obj, ...rest) => {
  const result = {};
  if (isObject(obj)) {
    rest.forEach((key) => {
      result[key] = obj[key];
    });
  }
  return result;
};

export { pick as default, pick };
