import { isArray as t } from "./isArray.js";
import { isObject as i } from "./isObject.js";
import { objectLength as m } from "./objectLength.js";
import "./toRawType.js";
import "./decapitalize.js";
const n = (r) => r == null || r === "" || Number.isNaN(r) || t(r) && r.length === 0 || i(r) && m(r) === 0;
export {
  n as default,
  n as isEmptyValue
};
