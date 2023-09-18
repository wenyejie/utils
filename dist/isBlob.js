import { toRawType as t } from "./toRawType.js";
import "./decapitalize.js";
const a = (o) => t(o) === "blob";
export {
  a as default,
  a as isBlob
};
