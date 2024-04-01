import { globalThis as c } from "./globalThis.js";
const e = {
  timeout: 300,
  isFirst: !0
}, m = (t) => typeof t == "number" ? { ...e, timeout: t } : typeof t == "boolean" ? { ...e, isFirst: t } : { ...e, ...t }, v = (t, o = {}) => {
  const { timeout: n, isFirst: l } = m(o), { resolve: a, promise: u } = Promise.withResolvers();
  let r = 0;
  const s = () => {
    const i = t();
    i && (clearInterval(r), a(i));
  };
  return r = c.setInterval(s, n), l && s(), u;
};
export {
  v as default,
  v as intervalExec
};
