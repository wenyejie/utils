import { isString as t } from "./isString.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const a = (r) => {
  try {
    return t(r) ? JSON.parse(r) && !0 : !1;
  } catch {
    return !1;
  }
};
export {
  a as default,
  a as isJsonString
};
