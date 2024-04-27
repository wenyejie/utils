import { toRawType } from "./toRawType.js";
const isPrimitive = (obj) => {
  const type = toRawType(obj);
  switch (type) {
    case "string":
    case "number":
    case "boolean":
    case "bigint":
    case "symbol":
    case "undefined":
    case "null":
      return true;
    default:
      return false;
  }
};
export {
  isPrimitive
};
