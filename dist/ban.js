import { isObject } from './isObject.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const ban = (data, ...rest) => {
  let result = {};
  if (!isObject(data)) {
    return result;
  }
  result = { ...data };
  rest.forEach((key) => {
    delete result[key];
  });
  return result;
};

export { ban, ban as default };
