import { toRawType } from "./toRawType.js";
const isWeakMap = (obj) => toRawType(obj) === "weakMap";
export {
  isWeakMap
};
