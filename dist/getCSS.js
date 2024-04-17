import { isString } from "./isString.js";
import { camelize } from "./camelize.js";
const getCSS = (elt, prop, pseudoElt) => {
  if (!isString(prop)) {
    return document.defaultView.getComputedStyle(elt, pseudoElt);
  }
  return document.defaultView.getComputedStyle(elt, pseudoElt)[camelize(prop)];
};
export {
  getCSS
};
