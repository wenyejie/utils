const r = (t, a = 0) => {
  const o = Math.max(t, a), n = Math.min(t, a);
  return Math.floor(Math.random() * (o - n + 1)) + n;
};
export {
  r as default,
  r as randomInteger
};
