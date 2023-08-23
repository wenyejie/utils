import { hasOwnProperty } from './hasOwnProperty.js';
import { isUndefined } from './isUndefined.js';
import { isNull } from './isNull.js';

const hasOwn = (obj, prop) => {
  if (isUndefined(obj) || isNull(obj)) {
    return false;
  }
  return hasOwnProperty.call(obj, prop);
};

export { hasOwn as default, hasOwn };
