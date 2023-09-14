import { hasOwn as e } from "./hasOwn.js";
import "./hasOwnProperty.js";
import "./isVoid.js";
const f = (t, r, p) => {
  if (!e(t, r) || !e(t, p))
    return t;
  const m = t[r];
  return t[r] = t[p], t[p] = m, t;
};
export {
  f as default,
  f as swap
};
