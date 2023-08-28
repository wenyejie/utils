import { isFunction as c } from "./isFunction.js";
import { isObject as s } from "./isObject.js";
import { hasOwn as a } from "./hasOwn.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
import "./hasOwnProperty.js";
import "./isUndefined.js";
import "./isNull.js";
const f = {
  before: null,
  mode: "src",
  attrs: null
}, A = (i, n, r) => (r = Object.assign({}, f, r), new Promise((d, l) => {
  const e = document.createElement(i), o = document.body;
  e[r.mode] = n;
  const t = r.attrs;
  if (s(t))
    for (let m in t)
      a(t, m) && e.setAttribute(m, t[m]);
  e.onload = () => {
    d(e), o.removeChild(e);
  }, e.onerror = () => {
    l(e), o.removeChild(e);
  }, c(r.before) && r.before(e), o.appendChild(e);
}));
export {
  A as default,
  A as load
};
