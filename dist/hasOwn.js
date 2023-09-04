import { hasOwnProperty as t } from "./hasOwnProperty.js";
import { isUndefined as o } from "./isUndefined.js";
import { isNull as i } from "./isNull.js";
const l = (r, e) => o(r) || i(r) ? (console.error(`${r} is not a valid type`), !1) : t.call(r, e);
export {
  l as default,
  l as hasOwn
};
