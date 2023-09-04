import { isElement as t } from "./isElement.js";
const s = (r, e, n = !0) => {
  if (!t(r))
    return console.error(`"${r}" is not a HTMLElement`), !1;
  if (!t(e))
    return console.error(`"${e}" is not a HTMLElement`), !1;
  for (n || (e = e.parentElement); e !== null; ) {
    if (e === r)
      return !0;
    e = e.parentElement;
  }
  return !1;
};
export {
  s as default,
  s as isParentElement
};
