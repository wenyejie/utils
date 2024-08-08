import { isString } from "./isString.js";
import { rHttp, rHttps } from "./regexp.js";
const url2http = (url) => {
  if (!isString(url)) {
    console.error(`"${url}" is not a string`);
    return "";
  }
  if (!rHttp.test(url)) {
    return url;
  }
  return url.replace(rHttps, "http");
};
export {
  url2http
};
