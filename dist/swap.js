import { hasOwn as n } from "./hasOwn.js";
const p = (t, r, e) => {
  if (!n(t, r) || !n(t, e))
    return t;
  const s = t[r];
  return t[r] = t[e], t[e] = s, t;
};
export {
  p as default,
  p as swap
};
