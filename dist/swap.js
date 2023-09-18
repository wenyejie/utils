import { hasOwn as n } from "./hasOwn.js";
import "./isVoid.js";
const m = (t, r, e) => {
  if (!n(t, r) || !n(t, e))
    return t;
  const p = t[r];
  return t[r] = t[e], t[e] = p, t;
};
export {
  m as default,
  m as swap
};
