import { load } from './load.js';
import './isFunction.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';
import './isObject.js';
import './hasOwn.js';
import './hasOwnProperty.js';
import './isUndefined.js';
import './isNull.js';

const loadScript = (url, options) => {
  return load("script", url, options);
};

export { loadScript as default, loadScript };
