import { isObject as r } from "./isObject.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const m = (t) => r(t) ? Object.keys(t).length : (console.error(`"${t}" is not a Object`), 0);
export {
  m as default,
  m as objectLength
};
