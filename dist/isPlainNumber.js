import { toRawType as r } from "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const e = (o) => r(o) === "number";
export {
  e as default,
  e as isPlainNumber
};
