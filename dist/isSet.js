import { toRawType as o } from "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const m = (t) => o(t) === "set";
export {
  m as default,
  m as isSet
};
