import { isString as r } from "./isString.js";
import { rHttp as o, rHttps as i } from "./regexp.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const a = (t) => r(t) ? o.test(t) ? t.replace(i, "http") : t : (console.error(`${t} is not a string`), "");
export {
  a as default,
  a as url2http
};
