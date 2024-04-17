import { toRawType } from "./toRawType.js";
const isPlainNumber = (obj) => toRawType(obj) === "number";
export {
  isPlainNumber
};
