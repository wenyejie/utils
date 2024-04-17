"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const DEFAULT_OPTIONS = {
  before: (_) => _,
  mode: "src",
  attrs: {}
};
const load = (tagName, url, options) => {
  options = Object.assign({}, DEFAULT_OPTIONS, options);
  return new Promise((resolve, reject) => {
    const $element = document.createElement(tagName);
    const $body = document.body;
    const { mode, attrs, before } = options;
    $element[mode] = url;
    for (const [key, value] of Object.entries(attrs)) {
      $element.setAttribute(key, value);
    }
    $element.onload = () => {
      resolve($element);
      $body.removeChild($element);
    };
    $element.onerror = () => {
      reject($element);
      $body.removeChild($element);
    };
    before($element);
    $body.appendChild($element);
  });
};
exports.load = load;
