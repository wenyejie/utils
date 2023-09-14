import { isString as r } from "./isString.js";
import { rHttp as e, rHttps as o } from "./regexp.js";
const p = (t) => r(t) ? e.test(t) ? t.replace(o, "http") : t : (console.error(`"${t}" is not a string`), "");
export {
  p as default,
  p as url2http
};
