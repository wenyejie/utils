import { isString as t } from "./isString.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const f = (r) => t(r) ? /\.\w+$/.test(r) : (console.error(new TypeError(`"${r}" is not a string`)), !1);
export {
  f as default,
  f as hasSuffix
};
