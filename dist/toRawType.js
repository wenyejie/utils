import { toTypeString as o } from "./toTypeString.js";
import { decapitalize as r } from "./decapitalize.js";
import "./objectToString.js";
const a = (t) => r(o(t).slice(8, -1));
export {
  a as default,
  a as toRawType
};
