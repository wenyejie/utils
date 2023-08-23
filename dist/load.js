import { isFunction } from './isFunction.js';
import { isObject } from './isObject.js';
import { hasOwn } from './hasOwn.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './hasOwnProperty.js';
import './isUndefined.js';
import './isNull.js';

const DEFAULT_OPTIONS = {
  before: null,
  mode: "src",
  attrs: null
};
const load = (tagName, url, options) => {
  options = Object.assign({}, DEFAULT_OPTIONS, options);
  return new Promise((resolve, reject) => {
    const $element = document.createElement(tagName);
    const $body = document.body;
    $element[options.mode] = url;
    const attrs = options.attrs;
    if (isObject(attrs)) {
      for (let key in attrs) {
        if (hasOwn(attrs, key)) {
          $element.setAttribute(key, attrs[key]);
        }
      }
    }
    $element.onload = () => {
      resolve($element);
      $body.removeChild($element);
    };
    $element.onerror = () => {
      reject($element);
      $body.removeChild($element);
    };
    isFunction(options.before) && options.before($element);
    $body.appendChild($element);
  });
};

export { load as default, load };
