const l = (e, ...t) => {
  for (const n of t) {
    const o = e.indexOf(n);
    e.splice(o, 1);
  }
  return e;
};
export {
  l as arrDelItemByVal,
  l as default
};
