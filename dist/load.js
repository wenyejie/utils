const u = {
  before: (t) => t,
  mode: "src",
  attrs: {}
}, f = (t, n, o) => (o = Object.assign({}, u, o), new Promise((d, s) => {
  const e = document.createElement(t), r = document.body, { mode: c, attrs: a, before: l } = o;
  e[c] = n;
  for (const [m, b] of Object.entries(a))
    e.setAttribute(m, b);
  e.onload = () => {
    d(e), r.removeChild(e);
  }, e.onerror = () => {
    s(e), r.removeChild(e);
  }, l(e), r.appendChild(e);
}));
export {
  f as default,
  f as load
};
