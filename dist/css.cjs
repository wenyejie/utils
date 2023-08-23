'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const camelize = require('./camelize.cjs');
const hyphenate = require('./hyphenate.cjs');
const isElement = require('./isElement.cjs');
const isString = require('./isString.cjs');
const isJson = require('./isJson.cjs');
const globalThis = require('./globalThis.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const ELEMENT_ERROR_MESSAGE = "请传入正确的参数elt: HTMLElement";
const getCSS = (elt, prop, pseudoElt) => {
  if (!isElement.isElement(elt)) {
    console.error(ELEMENT_ERROR_MESSAGE);
    return;
  }
  if (!isString.isString(prop)) {
    return document.defaultView.getComputedStyle(elt, pseudoElt);
  }
  return document.defaultView.getComputedStyle(elt, pseudoElt)[camelize.camelize(prop)];
};
const setCSS = (elt, prop, value) => {
  if (!isElement.isElement(elt)) {
    console.error(ELEMENT_ERROR_MESSAGE);
    return;
  }
  let styles = {};
  if (isString.isString(prop)) {
    styles[camelize.camelize(prop)] = value;
  } else if (isJson.isJson(prop)) {
    styles = prop;
  }
  for (const key in styles) {
    elt.style[key] = styles[key];
  }
};
const supportCSS = (prop, value) => {
  return globalThis.default.CSS?.supports?.(hyphenate.hyphenate(prop), value);
};
const css = {
  get: getCSS,
  set: setCSS,
  support: supportCSS
};

exports.default = css;
exports.getCSS = getCSS;
exports.setCSS = setCSS;
exports.supportCSS = supportCSS;
