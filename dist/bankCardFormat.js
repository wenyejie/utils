import { isString as o } from "./isString.js";
import { removeSpace as t } from "./removeSpace.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const s = (r) => o(r) ? t(r).replace(/(\d{4}(?=\d))/g, "$1 ") : (console.error(`${r} is not a string`), "");
export {
  s as bankCardFormat,
  s as default
};
