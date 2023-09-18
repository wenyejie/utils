import { toRawType as r } from "./toRawType.js";
import "./decapitalize.js";
const m = (o) => r(o) === "number";
export {
  m as default,
  m as isPlainNumber
};
