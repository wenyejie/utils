import { isString as t } from "./isString.js";
import { isInteger as i } from "./isInteger.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const d = (r) => (i(r) && (r += ""), t(r) ? r.replace(/(\d{3})\d*(\d{4})/, "$1****$2") : "");
export {
  d as default,
  d as phoneNumFormat
};
