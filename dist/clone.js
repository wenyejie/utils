import { isPrimitive as c } from "./isPrimitive.js";
import { toRawType as f } from "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const m = {
  set: Set,
  map: Map,
  weakSet: WeakSet,
  weakMap: WeakMap
}, o = (t, a = !0, e = /* @__PURE__ */ new WeakMap()) => {
  const r = f(t);
  if (c(t) || r === "function")
    return t;
  if (r in m)
    return new m[r](t);
  if (e.get(t))
    return e.get(t);
  const i = r === "array" ? [] : {};
  e.set(t, i);
  const l = Object.keys(t);
  let n;
  for (let s = 0, p = l.length; s < p; s++)
    n = l[s], i[n] = a ? o(t[n], a, e) : t[n];
  return i;
};
export {
  o as clone,
  o as default
};
