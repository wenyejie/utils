import { isString as n } from "./isString.js";
import s from "./globalThis.js";
const l = (o, t) => {
  if (!n(o))
    return console.error(`"${o}" is not a string`), !1;
  const r = new URL(o);
  let e = n(t) ? new URL(t) : s.location;
  return r.host === e.host;
};
export {
  l as default,
  l as isSameHost
};
