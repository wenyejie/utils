import o from "./globalThis.js";
const l = {
  timeout: 500,
  immediate: !1
}, f = (i, e) => {
  let m;
  const t = Object.assign({ ...l }, e);
  return typeof e == "boolean" ? t.immediate = e : typeof e == "number" && (t.timeout = e), function(...a) {
    clearTimeout(m), t.immediate && (i.apply(this, a), t.immediate = !1), m = o.setTimeout(i.bind(this, a), t.timeout);
  };
};
export {
  f as debounce,
  f as default
};
