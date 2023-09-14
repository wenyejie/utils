const u = {
  get: (r, e) => r[e]?.value,
  set: (r, e, o) => (r[e] = o, !0)
}, a = (r) => {
  const e = new Proxy({}, u);
  if (!Array.isArray(r)) {
    console.error(`"${r}" is not a array`);
    return;
  }
  for (const [o, n] of r) {
    const t = { value: n };
    for (const s of o)
      e[s] = t;
  }
  return e;
};
export {
  a as default,
  a as toMultiKeyOneValue
};
