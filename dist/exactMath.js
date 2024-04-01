import { decimalLength as s } from "./decimalLength.js";
import { toNumber as u } from "./toNumber.js";
import { spliceString as b } from "./spliceString.js";
import { isString as M } from "./isString.js";
const d = (r, t) => {
  if (t === 0)
    return r;
  const e = s(+r);
  let n = r.toString();
  return e === 0 ? n += "".padEnd(t, "0") : (n = n.replace(".", ""), n += "".padEnd(t - e, "0")), Number.parseFloat(n);
}, i = (r, t) => {
  if (t === 0)
    return r;
  let e = r.toString();
  const n = e.length;
  return t - n + 1 > 0 && (e = "".padEnd(t > n ? t - n + 1 : t - n, "0") + e), e = b(e, Math.abs(n - t), "."), Number.parseFloat(e);
}, c = (r, t) => {
  const e = Math.max(s(+r), s(+t));
  return {
    n1: d(u(r), e),
    n2: d(u(t), e),
    raise: e
  };
}, m = (r, t) => {
  const { n1: e, n2: n, raise: o } = c(r, t);
  return i(e + n, o);
}, B = (...r) => r.reduce((t, e) => m(t, e)), h = (r, t) => {
  const { n1: e, n2: n, raise: o } = c(r, t);
  return i(e - n, o);
}, F = (...r) => r.reduce((t, e) => h(t, e)), a = (r, t) => {
  const { n1: e, n2: n, raise: o } = c(r, t);
  return i(e * n, o * 2);
}, I = (...r) => r.reduce((t, e) => a(t, e), 1), l = (r, t) => {
  const { n1: e, n2: n } = c(r, t);
  return e / n;
}, P = (...r) => r.reduce((t, e) => l(t, e)), S = (r, t) => {
  const e = l(r, t), n = a(e - Math.floor(e), t), o = +r % +t;
  return n.toString().length <= o.toString().length ? n : o;
}, f = Object.freeze({
  "+": m,
  "-": h,
  "*": a,
  "/": l,
  "%": S
}), p = /\([^()]+\)/g, y = /[()]/g, k = /(?<=\d|\.)([%*/+-])/g, E = /\s+/g, g = (r) => {
  r = r.replace(k, " $1 "), r = r.trim();
  let t = r.split(E);
  if (t.length <= 0)
    return 0;
  let e = -1, n;
  do {
    if (e = t.findIndex((o) => ["*", "/", "%"].includes(o)), e < 0)
      break;
    n = f[t[e]](t[e - 1], t[e + 1]), t.splice(e - 1, 3, `${n}`);
  } while (!0);
  n = +t[0];
  for (let o = 1; o < t.length; o++)
    t[o] === "+" || t[o] === "-" || (n = f[t[o - 1] || "+"](n, t[o]));
  return n;
}, $ = (r) => {
  if (!M(r))
    return 0;
  try {
    for (; p.test(r); )
      r = r.replace(p, (t) => g(t.replace(y, "")) + "");
    return g(r);
  } catch {
    return 0;
  }
};
export {
  m as add,
  g as arithmetic,
  $ as default,
  l as divide,
  $ as exactMath,
  B as multiAdd,
  P as multiDivide,
  I as multiMultiply,
  F as multiSubtract,
  a as multiply,
  S as remain,
  h as subtract
};
