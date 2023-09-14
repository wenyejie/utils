import { isString as r } from "./isString.js";
import { camelize as i } from "./camelize.js";
const d = (e, t, m) => r(t) ? document.defaultView.getComputedStyle(e, m)[i(t)] : document.defaultView.getComputedStyle(e, m);
export {
  d as default,
  d as getCSS
};
