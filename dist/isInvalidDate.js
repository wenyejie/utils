import { toRawType as a } from "./toRawType.js";
import "./decapitalize.js";
const o = (t) => a(t) === "date" && t.toString() === "Invalid Date";
export {
  o as default,
  o as isInvalidDate
};
