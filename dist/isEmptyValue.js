import { isArray as t } from "./isArray.js";
import { isObject as i } from "./isObject.js";
import { objectLength as m } from "./objectLength.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const u = (r) => r == null || r === "" || Number.isNaN(r) || t(r) && r.length === 0 || i(r) && m(r) === 0;
export {
  u as default,
  u as isEmptyValue
};
