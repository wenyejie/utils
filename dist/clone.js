import { isPrimitive as u } from "./isPrimitive.js";
import { toRawType as m } from "./toRawType.js";
import "./decapitalize.js";
const c = {
  set: Set,
  map: Map,
  weakSet: WeakSet,
  weakMap: WeakMap
}, p = (t, a = !0, e = /* @__PURE__ */ new WeakMap()) => {
  const r = m(t);
  if (u(t) || r === "function")
    return t;
  if (r in c)
    return new c[r](t);
  if (e.get(t))
    return e.get(t);
  const i = r === "array" ? [] : {};
  e.set(t, i);
  const l = Object.keys(t);
  let n;
  for (let s = 0, f = l.length; s < f; s++)
    n = l[s], i[n] = a ? p(t[n], a, e) : t[n];
  return i;
};
export {
  p as clone,
  p as default
};
