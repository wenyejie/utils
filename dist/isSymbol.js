import { toRawType as t } from "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const s = (o) => t(o) === "symbol";
export {
  s as default,
  s as isSymbol
};
