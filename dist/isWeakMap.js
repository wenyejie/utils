import { toRawType as p } from "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const i = (o) => p(o) === "weakMap";
export {
  i as default,
  i as isWeakMap
};
