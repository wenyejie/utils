import i from "./globalThis.js";
const s = (e, o = 500, r = !1) => {
  let t;
  return function(...l) {
    if (r) {
      e.apply(this, l), r = !1;
      return;
    }
    t || (t = i.setTimeout(() => {
      clearTimeout(t), e.apply(this, l);
    }, o));
  };
};
export {
  s as default,
  s as throttle
};
