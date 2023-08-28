import i from "./globalThis.js";
const u = (e, a = 500, t = !1) => {
  let l;
  return function(...o) {
    clearTimeout(l), t && (e.apply(this, o), t = !1), l = i.setTimeout(() => {
      e.apply(this, o);
    }, a);
  };
};
export {
  u as debounce,
  u as default
};
