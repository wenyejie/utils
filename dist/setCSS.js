import { camelize } from "./camelize.js";
const setCSS = (elt, prop, value) => {
  let styles = {};
  if (typeof prop === "string") {
    if (value === void 0 && prop.includes(":")) {
      elt.style.cssText = prop;
      return;
    }
    styles[prop] = value;
  } else {
    styles = prop;
  }
  for (const key in styles) {
    elt.style[camelize(key)] = styles[key];
  }
};
export {
  setCSS
};
