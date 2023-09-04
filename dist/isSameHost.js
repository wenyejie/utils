import { isString as r } from "./isString.js";
import e from "./globalThis.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const c = (o, t) => {
  if (!r(o))
    return console.error(`${o} is not a string`), !1;
  const i = new URL(o);
  let n = r(t) ? new URL(t) : e.location;
  return i.host === n.host;
};
export {
  c as default,
  c as isSameHost
};
