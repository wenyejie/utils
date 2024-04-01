import { toRawType as t } from "./toRawType.js";
const i = (o) => t(o) === "function";
export {
  i as default,
  i as isFunction
};
