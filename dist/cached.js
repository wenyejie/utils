const a = (n) => {
  const t = {};
  return function() {
    const r = Array.prototype.join.call(arguments, ",");
    return r in t ? t[r] : t[r] = n.apply(this, arguments);
  };
};
export {
  a as cached,
  a as default
};
