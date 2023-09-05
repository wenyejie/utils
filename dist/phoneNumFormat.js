import { isString as t } from "./isString.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const u = (r) => (Number.isInteger(r) && (r += ""), t(r) ? r.replace(/(\d{3})\d*(\d{4})/, "$1****$2") : "");
export {
  u as default,
  u as phoneNumFormat
};
