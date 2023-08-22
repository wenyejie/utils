import isString from './isString'
import { rHttps, rHttp } from './regexp'

/**
 * url2https
 * @param url
 */
export const url2https = (url: string) => {
  if (!isString(url)) {
    return ''
  }
  if (rHttps.test(url)) {
    return url
  }
  return url.replace(rHttp, 'https')
}

export default url2https
