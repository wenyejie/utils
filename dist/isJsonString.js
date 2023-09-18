import { isString as t } from "./isString.js";
const n = (r) => {
  if (!t(r))
    return !1;
  try {
    return JSON.parse(r), !0;
  } catch {
    return !1;
  }
};
export {
  n as default,
  n as isJsonString
};
