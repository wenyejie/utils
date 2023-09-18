import { toRawType as t } from "./toRawType.js";
import "./decapitalize.js";
const i = (e) => {
  switch (t(e)) {
    case "string":
    case "number":
    case "boolean":
    case "bigint":
    case "symbol":
    case "undefined":
    case "null":
      return !0;
    default:
      return !1;
  }
};
export {
  i as default,
  i as isPrimitive
};
