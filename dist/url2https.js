import { isString } from "./isString.js";
import { rHttps, rHttp } from "./regexp.js";
const url2https = (url) => {
  if (!isString(url)) {
    console.error(`"${url}" is not a string`);
    return "";
  }
  if (rHttps.test(url)) {
    return url;
  }
  return url.replace(rHttp, "https");
};
export {
  url2https
};
