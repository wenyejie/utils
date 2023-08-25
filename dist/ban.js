import { isObject } from './isObject.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';

const ban = (obj, ...rest) => {
  let result = {};
  if (!isObject(obj)) {
    return result;
  }
  result = { ...obj };
  rest.forEach((key) => {
    delete result[key];
  });
  return result;
};

export { ban, ban as default };
