import n from "./globalThis.js";
import { hasSuffix as c } from "./hasSuffix.js";
import "./isString.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const g = (p, t) => {
  const o = p.split(","), i = o[0].match(/:(.*?);/)[1], s = n.atob(o[1]);
  let r = s.length;
  const a = new Uint8Array(r);
  for (; r--; )
    a[r] = s.charCodeAt(r);
  return t = c(t) ? t : `${t}.${i.substring(6)}`, new File([a], t, { type: i });
};
export {
  g as base642file,
  g as default
};
