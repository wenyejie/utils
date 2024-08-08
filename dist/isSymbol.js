import { toRawType } from "./toRawType.js";
const isSymbol = (obj) => toRawType(obj) === "symbol";
export {
  isSymbol
};
