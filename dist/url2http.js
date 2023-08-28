import { isString as r } from "./isString.js";
import { rHttp as p, rHttps as i } from "./regexp.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const a = (t) => r(t) ? p.test(t) ? t.replace(i, "http") : t : "";
export {
  a as default,
  a as url2http
};
