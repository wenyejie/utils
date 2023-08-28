const t = /\B([A-Z])/g, a = (e) => e.replace(t, "-$1").toLowerCase();
export {
  a as default,
  a as hyphenate
};
