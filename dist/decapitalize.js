const t = (a) => a.replace(/(\w+)/gi, (e) => e.charAt(0).toLowerCase() + e.slice(1));
export {
  t as decapitalize,
  t as default
};
