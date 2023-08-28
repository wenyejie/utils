import { toRawType as a } from "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const p = (t) => a(t) === "date" && t.toString() === "Invalid Date";
export {
  p as default,
  p as isInvalidDate
};
