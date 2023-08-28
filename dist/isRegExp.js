import { toRawType as p } from "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const m = (o) => p(o) === "regexp";
export {
  m as default,
  m as isRegExp
};
