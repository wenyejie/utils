'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isFunction = require('./isFunction.cjs');
const isObject = require('./isObject.cjs');
const hasOwn = require('./hasOwn.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');
require('./hasOwnProperty.cjs');
require('./isUndefined.cjs');
require('./isNull.cjs');

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
    if (isObject.isObject(attrs)) {
      for (let key in attrs) {
        if (hasOwn.hasOwn(attrs, key)) {
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
    isFunction.isFunction(options.before) && options.before($element);
    $body.appendChild($element);
  });
};

exports.default = load;
exports.load = load;
