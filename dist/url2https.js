import { isString as r } from "./isString.js";
import { rHttps as e, rHttp as o } from "./regexp.js";
const n = (t) => r(t) ? e.test(t) ? t : t.replace(o, "https") : (console.error(`"${t}" is not a string`), "");
export {
  n as default,
  n as url2https
};
