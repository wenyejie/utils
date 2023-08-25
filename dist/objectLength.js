import { isObject } from './isObject.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';

const objectLength = (obj) => {
  if (!isObject(obj)) {
    return 0;
  }
  return Object.keys(obj).length;
};

export { objectLength as default, objectLength };
