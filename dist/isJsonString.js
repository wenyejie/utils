import { isString as t } from "./isString.js";
const n = (r) => {
  try {
    return t(r) ? JSON.parse(r) && !0 : !1;
  } catch {
    return !1;
  }
};
export {
  n as default,
  n as isJsonString
};
