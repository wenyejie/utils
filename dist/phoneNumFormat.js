import { isString as t } from "./isString.js";
const i = (r) => (Number.isInteger(r) && (r += ""), t(r) ? r.replace(/(\d{3})\d*(\d{4})/, "$1****$2") : "");
export {
  i as default,
  i as phoneNumFormat
};
