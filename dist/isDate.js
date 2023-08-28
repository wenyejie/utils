import { toRawType as o } from "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const p = (t) => o(t) === "date" && t.toString() !== "Invalid Date";
export {
  p as default,
  p as isDate
};
