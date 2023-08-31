import { isParentElement as i } from "./isParentElement.js";
import "./isElement.js";
const m = (t, r, c) => {
  const e = (n) => {
    i(t, n?.target) || r();
  };
  return document.addEventListener("click", e, { once: c }), () => {
    document.removeEventListener("click", e);
  };
};
export {
  m as clickOutside,
  m as default
};
