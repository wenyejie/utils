import { hasOwnProperty as e } from "./hasOwnProperty.js";
import { isUndefined as f } from "./isUndefined.js";
import { isNull as i } from "./isNull.js";
const a = (r, t) => f(r) || i(r) ? !1 : e.call(r, t);
export {
  a as default,
  a as hasOwn
};
