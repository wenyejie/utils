import { toRawType as a } from "./toRawType.js";
const i = (t) => a(t) === "date" && t.toString() === "Invalid Date";
export {
  i as default,
  i as isInvalidDate
};
