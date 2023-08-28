import { toRawType as o } from "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const i = (t) => o(t) === "weakSet";
export {
  i as default,
  i as isWeakSet
};
