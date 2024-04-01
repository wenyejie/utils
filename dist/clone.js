import { isPrimitive as u } from "./isPrimitive.js";
import { toRawType as k } from "./toRawType.js";
const c = {
  set: Set,
  map: Map,
  weakSet: WeakSet,
  weakMap: WeakMap
}, m = (t, a = !0, e = /* @__PURE__ */ new WeakMap()) => {
  const r = k(t);
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
    n = l[s], i[n] = a ? m(t[n], a, e) : t[n];
  return i;
};
export {
  m as clone,
  m as default
};
