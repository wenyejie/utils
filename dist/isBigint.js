import { toRawType as i } from "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const a = (t) => i(t) === "bigint";
export {
  a as default,
  a as isBigint
};
