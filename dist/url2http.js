import { isString } from './isString.js';
import { rHttp, rHttps } from './regexp.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const url2http = (url) => {
  if (!isString(url)) {
    return "";
  }
  if (!rHttp.test(url)) {
    return url;
  }
  return url.replace(rHttps, "http");
};

export { url2http as default, url2http };
