import isString from './isString'
import { rHttps, rHttp } from './regexp'

/**
 * url2https
 * @param url url
 */
export const url2http = (url: string) => {
  if (!isString(url)) {
    return ''
  }
  if (!rHttp.test(url)) {
    return url
  }
  return url.replace(rHttps, 'http')
}

export default url2http
