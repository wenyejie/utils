import { toRawType } from "./toRawType.js";
const isWeakSet = (obj) => toRawType(obj) === "weakSet";
export {
  isWeakSet
};
