import { isObject as e } from "./isObject.js";
import "./toRawType.js";
import "./decapitalize.js";
const c = (t) => e(t) ? Object.keys(t).length : (console.error(`"${t}" is not a Object`), 0);
export {
  c as default,
  c as objectLength
};
