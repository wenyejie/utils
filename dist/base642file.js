import l from "./globalThis.js";
const c = (o, s) => {
  const e = o.split(","), a = e[0].match(/:(.*?);/)[1], n = l.atob(e[1]);
  let t = n.length;
  const r = new Uint8Array(t);
  for (; t--; )
    r[t] = n.charCodeAt(t);
  return new File([r], s + "." + a.substring(6), { type: a });
};
export {
  c as base642file,
  c as default
};
