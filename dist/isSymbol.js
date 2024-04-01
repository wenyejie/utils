import { toRawType as t } from "./toRawType.js";
const s = (o) => t(o) === "symbol";
export {
  s as default,
  s as isSymbol
};
