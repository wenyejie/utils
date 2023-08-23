import { isArray } from './isArray.js';

const unique = (array) => {
  if (!isArray(array)) {
    return array;
  }
  return Array.from(new Set(array));
};

export { unique as default, unique };
