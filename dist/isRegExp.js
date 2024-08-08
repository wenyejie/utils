import { toRawType } from "./toRawType.js";
const isRegExp = (obj) => toRawType(obj) === "regexp";
export {
  isRegExp
};
