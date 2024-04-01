import { isArray as t } from "./isArray.js";
import { isObject as e } from "./isObject.js";
import { objectLength as i } from "./objectLength.js";
const l = (r) => r == null || r === "" || Number.isNaN(r) || t(r) && r.length === 0 || e(r) && i(r) === 0;
export {
  l as default,
  l as isEmptyValue
};
