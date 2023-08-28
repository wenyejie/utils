import { toRawType as m } from "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const p = (r) => m(r) === "number" && !Number.isNaN(r);
export {
  p as default,
  p as isNumber
};
