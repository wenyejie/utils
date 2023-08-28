const c = (e, t) => {
  const s = e.splice(t, 1);
  return e.splice(t + 1, 0, s?.[0]), e;
};
export {
  c as arrDownItem,
  c as default
};
