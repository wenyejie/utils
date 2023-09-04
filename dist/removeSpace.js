import { isString as o } from "./isString.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const e = /\s+/g, c = (r) => o(r) ? r.replace(e, "") : (console.error(`${r} is not a string`), "");
export {
  c as default,
  c as removeSpace
};
