import { isString as t } from "./isString.js";
import { removeSpace as o } from "./removeSpace.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const f = (r) => t(r) ? o(r).replace(/(\d{4}(?=\d))/g, "$1 ") : "";
export {
  f as bankCardFormat,
  f as default
};
