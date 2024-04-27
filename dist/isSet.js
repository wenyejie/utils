import { toRawType } from "./toRawType.js";
const isSet = (obj) => toRawType(obj) === "set";
export {
  isSet
};
