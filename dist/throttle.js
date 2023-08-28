import a from "./globalThis.js";
const u = (e, o = 500, l = !1) => {
  let t;
  return function(...r) {
    if (l) {
      e.apply(this, r), l = !1;
      return;
    }
    t || (t = a.setTimeout(() => {
      clearTimeout(t), e.apply(this, r);
    }, o));
  };
};
export {
  u as default,
  u as throttle
};
