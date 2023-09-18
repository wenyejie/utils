import { toRawType as a } from "./toRawType.js";
import "./decapitalize.js";
const i = (t) => a(t) === "date";
export {
  i as default,
  i as isPlainDate
};
