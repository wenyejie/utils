import { toRawType } from "./toRawType.js";
const isObject = (obj) => toRawType(obj) === "object";
export {
  isObject
};
