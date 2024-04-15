import { isPromise as f } from "./isPromise.js";
import { normalizeOptions as T } from "./normalizeOptions.js";
const y = {
  retry: 5,
  // 重试次数
  base: 2,
  failureReturn: null,
  check: (r) => r?.error ? !1 : r
}, p = {
  number: "retry",
  function: "check"
}, I = (r, n) => {
  const { retry: s, base: i, failureReturn: l, check: u } = T(n, p, y), { resolve: a, promise: m } = Promise.withResolvers();
  let R = 0, t = 0, o = 0;
  const c = async () => {
    let e = r();
    if (f(e))
      try {
        e = await e;
      } catch {
        e = l;
      }
    u(e) || t >= s ? (clearTimeout(R), a(e)) : (o = Math.pow(i, t) - 0.5, setTimeout(c, o * 1e3), t++);
  };
  return c(), m;
};
export {
  I as default,
  I as retryIncorrect
};
