import { toRawType as e } from "./toRawType.js";
import "./decapitalize.js";
const p = (t) => e(t) === "weakSet";
export {
  p as default,
  p as isWeakSet
};
