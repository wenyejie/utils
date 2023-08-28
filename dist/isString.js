import { toRawType as r } from "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const e = (t) => r(t) === "string" && t.trim().length > 0;
export {
  e as default,
  e as isString
};
