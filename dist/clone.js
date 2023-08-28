import { isPrimitive as l } from "./isPrimitive.js";
import { isJson as o } from "./isJson.js";
import { toRawType as u } from "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const f = {
  set: Set,
  map: Map,
  weakSet: WeakSet,
  weakMap: WeakMap
}, c = (t, m = !0, e = /* @__PURE__ */ new WeakMap()) => {
  const r = u(t);
  if (l(t) || r === "function")
    return t;
  if (r in f)
    return new f[r](t);
  if (!o(t))
    return t;
  if (e.get(t))
    return e.get(t);
  const i = r === "array" ? [] : {};
  e.set(t, i);
  const a = Object.keys(t);
  let n;
  for (let s = 0, p = a.length; s < p; s++)
    n = a[s], i[n] = m ? c(t[n], m, e) : t[n];
  return i;
};
export {
  c as clone,
  c as default
};
