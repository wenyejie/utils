import { isParentElement as i } from "./isParentElement.js";
const d = (t, c, n) => {
  const e = (r) => {
    i(t, r?.target) || c();
  };
  return document.addEventListener("click", e, { once: n }), () => {
    document.removeEventListener("click", e);
  };
};
export {
  d as clickOutside,
  d as default
};
