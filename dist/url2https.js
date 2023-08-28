import { isString as r } from "./isString.js";
import { rHttps as p, rHttp as i } from "./regexp.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const a = (t) => r(t) ? p.test(t) ? t : t.replace(i, "https") : "";
export {
  a as default,
  a as url2https
};
