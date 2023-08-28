import { isString as t } from "./isString.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const e = /\s+/g, c = (r) => t(r) ? r.replace(e, "") : "";
export {
  c as default,
  c as removeSpace
};
