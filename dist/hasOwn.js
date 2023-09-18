import { isVoid as e } from "./isVoid.js";
const o = Object.prototype.hasOwnProperty, a = (r, t) => e(r) ? (console.error(`"${r}" is not a valid type`), !1) : o.call(r, t);
export {
  a as default,
  a as hasOwn,
  o as hasOwnProperty
};
