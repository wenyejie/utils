import i from "./globalThis.js";
const p = (t, a = 500, e = !1) => {
  let l;
  return function(...o) {
    clearTimeout(l), e && (t.apply(this, o), e = !1), l = i.setTimeout(() => {
      t.apply(this, o);
    }, a);
  };
};
export {
  p as debounce,
  p as default
};
