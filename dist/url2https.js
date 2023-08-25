import { isString } from './isString.js';
import { rHttps, rHttp } from './regexp.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';

const url2https = (url) => {
  if (!isString(url)) {
    return "";
  }
  if (rHttps.test(url)) {
    return url;
  }
  return url.replace(rHttp, "https");
};

export { url2https as default, url2https };
