import { hasOwnProperty as t } from "./hasOwnProperty.js";
import { isVoid as e } from "./isVoid.js";
const i = (r, o) => e(r) ? (console.error(`"${r}" is not a valid type`), !1) : t.call(r, o);
export {
  i as default,
  i as hasOwn
};
