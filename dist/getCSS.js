import { isString as r } from "./isString.js";
import { camelize as i } from "./camelize.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const a = (t, e, m) => r(e) ? document.defaultView.getComputedStyle(t, m)[i(e)] : document.defaultView.getComputedStyle(t, m);
export {
  a as default,
  a as getCSS
};
