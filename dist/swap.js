import { hasOwn as m } from "./hasOwn.js";
import "./hasOwnProperty.js";
import "./isUndefined.js";
import "./isNull.js";
const i = (t, r, p) => {
  if (!m(t, r) || !m(t, p))
    return t;
  const e = t[r];
  return t[r] = t[p], t[p] = e, t;
};
export {
  i as default,
  i as swap
};
