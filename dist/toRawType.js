import { decapitalize as o } from "./decapitalize.js";
const e = Object.prototype.toString, r = (t) => e.call(t).toLocaleLowerCase(), a = (t) => o(r(t).slice(8, -1));
export {
  a as default,
  e as objectToString,
  a as toRawType,
  r as toTypeString
};
