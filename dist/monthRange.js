import { toDate as i } from "./toDate.js";
import { isDate as s } from "./isDate.js";
import "./isNumber.js";
import "./isString.js";
import "./regexp.js";
import "./isInvalidDate.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
import "./isObject.js";
import "./nullProtoObject.js";
const H = (t, r = "range") => {
  t = i(t);
  const n = {
    start: null,
    end: null
  };
  if (!s(t))
    return console.error(`"${t}" is not a valid date`), r === "range" ? n : null;
  const e = new Date(t);
  if (r !== "end" && (e.setDate(1), e.setHours(0, 0, 0, 0), r === "start"))
    return e;
  const o = new Date(t);
  return r !== "start" && (o.setMonth(o.getMonth() + 1, 0), o.setHours(23, 59, 59, 999), r === "end") ? o : (n.start = e, n.end = o, n);
};
export {
  H as default,
  H as monthRange
};
