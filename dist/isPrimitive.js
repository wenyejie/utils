import { toRawType as t } from "./toRawType.js";
const n = (e) => {
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
  n as default,
  n as isPrimitive
};
