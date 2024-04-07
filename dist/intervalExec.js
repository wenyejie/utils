import { globalThis as u } from "./globalThis.js";
const t = {
  timeout: 300,
  immediate: !0
}, c = (e) => typeof e == "number" ? { ...t, timeout: e } : typeof e == "boolean" ? { ...t, immediate: e } : { ...t, ...e }, v = (e, m = {}) => {
  const { timeout: n, immediate: a } = c(m), { resolve: l, promise: s } = Promise.withResolvers();
  let r = 0;
  const i = () => {
    const o = e();
    o && (clearInterval(r), l(o));
  };
  return () => (r = u.setInterval(i, n), a && i(), s);
};
export {
  v as default,
  v as intervalExec
};
