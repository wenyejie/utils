import { isObject as r } from "./isObject.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const n = (t) => r(t) ? Object.keys(t).length : 0;
export {
  n as default,
  n as objectLength
};
