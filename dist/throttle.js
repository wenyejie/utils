import r from "./globalThis.js";
const l = {
  timeout: 500,
  immediate: !1
}, u = (m, e) => {
  let i;
  const t = Object.assign({ ...l }, e);
  return typeof e == "boolean" ? t.immediate = e : typeof e == "number" && (t.timeout = e), function(...a) {
    if (t.immediate) {
      m.apply(this, a), t.immediate = !1;
      return;
    }
    i || (i = r.setTimeout(() => {
      clearTimeout(i), m.apply(this, a);
    }, t.timeout));
  };
};
export {
  u as default,
  u as throttle
};
