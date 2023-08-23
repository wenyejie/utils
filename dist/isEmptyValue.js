import { isArray } from './isArray.js';
import { isObject } from './isObject.js';
import { objectLength } from './objectLength.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const isEmptyValue = (value) => {
  return value === void 0 || value === null || value === "" || Number.isNaN(value) || isArray(value) && value.length === 0 || isObject(value) && objectLength(value) === 0;
};

export { isEmptyValue as default, isEmptyValue };
