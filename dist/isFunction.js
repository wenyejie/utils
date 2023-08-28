import { toRawType as t } from "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const n = (o) => t(o) === "function";
export {
  n as default,
  n as isFunction
};
