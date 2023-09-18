import { toRawType as t } from "./toRawType.js";
import "./decapitalize.js";
const p = (o) => t(o) === "function";
export {
  p as default,
  p as isFunction
};
