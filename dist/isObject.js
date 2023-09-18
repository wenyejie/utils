import { toRawType as o } from "./toRawType.js";
import "./decapitalize.js";
const r = (t) => o(t) === "object";
export {
  r as default,
  r as isObject
};
