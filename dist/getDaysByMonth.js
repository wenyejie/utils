import { toDate as o } from "./toDate.js";
import { isDate as r } from "./isDate.js";
import "./isNumber.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
import "./isString.js";
import "./regexp.js";
import "./isInvalidDate.js";
const g = (t) => (t = o(t), r(t) ? new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate() : (console.error(`${t} is not a valid date`), 0));
export {
  g as default,
  g as getDaysByMonth
};
