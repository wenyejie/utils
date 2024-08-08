import { toRawType } from "./toRawType.js";
const isFunction = (obj) => toRawType(obj) === "function";
export {
  isFunction
};
