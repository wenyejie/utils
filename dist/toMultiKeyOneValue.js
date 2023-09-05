const a = {
  get: (r, t) => r[t]?.value,
  set: (r, t, n) => {
    let e = [];
    e.includes(",") && (e = t.split(",")), e = Array.isArray(e) ? e : [t];
    const s = r[e.find((o) => r[o])] || { value: n };
    for (const o of e)
      r[o] = s;
    return !0;
  }
}, l = (r) => {
  const t = {}, n = new Proxy(t, a);
  Array.isArray(r) || console.error(`${r} is not a array`);
  for (const [e, s] of r)
    n[e] = s;
  return n;
};
export {
  l as default,
  l as toMultiKeyOneValue
};
