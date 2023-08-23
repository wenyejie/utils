import { isArray } from './isArray.js';
import { isObject } from './isObject.js';
import { hasOwn } from './hasOwn.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './hasOwnProperty.js';
import './isUndefined.js';
import './isNull.js';

const find = (obj, key, value) => {
  const props = isObject(key) ? key : { [key]: value };
  if (!isArray(obj) || !isObject(props)) {
    return null;
  }
  return obj.find((item) => {
    if (!isObject(item)) {
      return false;
    }
    for (let key2 in props) {
      if (hasOwn(props, key2) && item[key2] !== props[key2]) {
        return false;
      }
    }
    return true;
  });
};

export { find as default, find };
