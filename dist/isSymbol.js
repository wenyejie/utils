import { toRawType as t } from "./toRawType.js";
import "./decapitalize.js";
const r = (o) => t(o) === "symbol";
export {
  r as default,
  r as isSymbol
};
