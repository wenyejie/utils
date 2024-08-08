import { toRawType } from "./toRawType.js";
const isInvalidDate = (obj) => toRawType(obj) === "date" && obj.toString() === "Invalid Date";
export {
  isInvalidDate
};
