import { globalThis as f } from "./globalThis.js";
import { isPromise as d } from "./isPromise.js";
const r = {
  timeout: 300,
  immediate: !0
}, v = (e) => typeof e == "number" ? { ...r, timeout: e } : typeof e == "boolean" ? { ...r, immediate: e } : { ...r, ...e }, h = (e, m = {}) => {
  const { timeout: n, immediate: a } = v(m);
  return (...i) => {
    const { resolve: s, promise: u } = Promise.withResolvers();
    let o = 0;
    const l = async (c) => {
      let t = e(...c);
      if (d(t))
        try {
          t = await t;
        } catch {
          t = null;
        }
      t && (clearInterval(o), s(t));
    };
    return o = f.setInterval(l.bind(null, i), n), a && l(i), u;
  };
};
export {
  h as default,
  h as intervalExec
};
