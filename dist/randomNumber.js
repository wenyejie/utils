const r = (t, a = 0) => {
  const o = Math.max(t, a), n = Math.min(t, a);
  return Math.random() * (o - n) + n;
};
export {
  r as default,
  r as randomNumber
};
