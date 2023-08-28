import { camelize as i } from "./camelize.js";
import { hyphenate as n } from "./hyphenate.js";
import { isString as m } from "./isString.js";
import { isJson as f } from "./isJson.js";
import u from "./globalThis.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const S = (e, t, o) => m(t) ? document.defaultView.getComputedStyle(e, o)[i(t)] : document.defaultView.getComputedStyle(e, o), l = (e, t, o) => {
  let r = {};
  m(t) ? r[i(t)] = o : f(t) && (r = t);
  for (const s in r)
    e.style[s] = r[s];
}, p = (e, t) => u.CSS?.supports?.(n(e), t), b = {
  get: S,
  set: l,
  support: p
};
export {
  b as default,
  S as getCSS,
  l as setCSS,
  p as supportCSS
};
