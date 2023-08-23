import { hasOwn } from './hasOwn.js';
import './hasOwnProperty.js';
import './isUndefined.js';
import './isNull.js';

const swap = (obj, i, j) => {
  if (!hasOwn(obj, i) || !hasOwn(obj, j)) {
    return obj;
  }
  const temp = obj[i];
  obj[i] = obj[j];
  obj[j] = temp;
  return obj;
};

export { swap as default, swap };
