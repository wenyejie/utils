import { toRawType as p } from "./toRawType.js";
import "./decapitalize.js";
const m = (o) => p(o) === "map";
export {
  m as default,
  m as isMap
};
