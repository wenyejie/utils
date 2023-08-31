import { isElement as n } from "./isElement.js";
const s = (r, e, t = !0) => {
  if (!n(r))
    return console.error(new TypeError(`"${r}" is not a HTMLElement`)), !1;
  if (!n(e))
    return console.error(new TypeError(`"${e}" is not a HTMLElement`)), !1;
  for (t || (e = e.parentElement); e !== null; ) {
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
