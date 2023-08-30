import { isElement as e } from "./isElement.js";
import { isFunction as m } from "./isFunction.js";
import { isParentElement as n } from "./isParentElement.js";
import { noop as c } from "./noop.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const k = (t, r) => {
  if (!e(t) || !m(r))
    return c;
  const o = (i) => {
    n(t, i?.target) || r();
  };
  return document.addEventListener("click", o), () => {
    document.removeEventListener("click", o);
  };
};
export {
  k as clickOutside,
  k as default
};
