import { toRawType } from "./toRawType.js";
const isMap = (obj) => toRawType(obj) === "map";
export {
  isMap
};
