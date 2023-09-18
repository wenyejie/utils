const t = (a) => a.replace(/(\w+)/gi, (e) => e.charAt(0).toUpperCase() + e.slice(1));
export {
  t as capitalize,
  t as default
};
