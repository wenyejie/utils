import { isElement as r } from "./isElement.js";
const u = (t, e, n = !0) => {
  if (!r(t) || !r(e))
    return !1;
  for (n || (e = e.parentElement); e !== null; ) {
    if (e === t)
      return !0;
    e = e.parentElement;
  }
  return !1;
};
export {
  u as default,
  u as isParentElement
};
