import { find } from './find.js';
import { isObject } from './isObject.js';
import './isArray.js';
import './hasOwn.js';
import './hasOwnProperty.js';
import './isUndefined.js';
import './isNull.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const findProps = (data, propValue, propKey = "value", returnKey = "label") => {
  const item = find(data, propKey, propValue);
  return isObject(item) ? item[returnKey] : "";
};

export { findProps as default, findProps };
