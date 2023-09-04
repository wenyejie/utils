import e from "./globalThis.js";
import { hasSuffix as h } from "./hasSuffix.js";
const d = (c, t) => {
  const o = c.split(","), s = o[0].match(/:(.*?);/)[1], a = e.atob(o[1]);
  let r = a.length;
  const n = new Uint8Array(r);
  for (; r--; )
    n[r] = a.charCodeAt(r);
  return t = h(t) ? t : `${t}.${s.substring(6)}`, new File([n], t, { type: s });
};
export {
  d as base642file,
  d as default
};
