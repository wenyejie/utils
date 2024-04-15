import { globalThis as p } from "./globalThis.js";
import { isPromise as v } from "./isPromise.js";
import { normalizeOptions as b } from "./normalizeOptions.js";
const d = {
  timeout: 300,
  immediate: !0,
  rtnVal: null,
  abort: -1
}, x = {
  number: "timeout",
  boolean: "immediate"
}, y = (n, l) => {
  const { timeout: s, immediate: m, rtnVal: o, abort: c } = b(l, x, d);
  return (...u) => {
    const { resolve: i, promise: f } = Promise.withResolvers();
    let t = c, r = 0;
    const a = async () => {
      if (t >= 0)
        if (t > 0)
          t--;
        else {
          clearInterval(r), i(o);
          return;
        }
      let e = n(...u);
      if (v(e))
        try {
          e = await e;
        } catch {
          e = o;
        }
      e && (clearInterval(r), i(e));
    };
    return r = p.setInterval(a, s), m && a(), f;
  };
};
export {
  y as default,
  y as intervalExec
};
