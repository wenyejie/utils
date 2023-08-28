import { isString as r } from "./isString.js";
import e from "./globalThis.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const U = (t, o) => {
  if (!r(t))
    return !1;
  const i = new URL(t);
  let n = r(o) ? new URL(o) : e.location;
  return i.host === n.host;
};
export {
  U as default,
  U as isSameHost
};
