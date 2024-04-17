import { toRawType } from "./toRawType.js";
const isBlob = (obj) => toRawType(obj) === "blob";
export {
  isBlob
};
