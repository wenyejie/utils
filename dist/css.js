import { camelize } from './camelize.js';
import { hyphenate } from './hyphenate.js';
import { isString } from './isString.js';
import { isJson } from './isJson.js';
import globalThis from './globalThis.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';

const getCSS = (elt, prop, pseudoElt) => {
  if (!isString(prop)) {
    return document.defaultView.getComputedStyle(elt, pseudoElt);
  }
  return document.defaultView.getComputedStyle(elt, pseudoElt)[camelize(prop)];
};
const setCSS = (elt, prop, value) => {
  let styles = {};
  if (isString(prop)) {
    styles[camelize(prop)] = value;
  } else if (isJson(prop)) {
    styles = prop;
  }
  for (const key in styles) {
    elt.style[key] = styles[key];
  }
};
const supportCSS = (prop, value) => {
  return globalThis.CSS?.supports?.(hyphenate(prop), value);
};
const css = {
  get: getCSS,
  set: setCSS,
  support: supportCSS
};

export { css as default, getCSS, setCSS, supportCSS };
