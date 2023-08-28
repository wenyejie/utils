const t = /-(\w)/g, c = (a) => a.replace(t, (r, e) => e ? e.toUpperCase() : "");
export {
  c as camelize,
  c as default
};
