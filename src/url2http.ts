import isString from './isString'
import { rHttp, rHttps } from './regexp'

/**
 * url2https
 * @param url url
 */
export const url2http = (url: string) => {
  if (!isString(url)) {
    console.error(`"${url}" is not a string`)
    return ''
  }
  if (!rHttp.test(url)) {
    return url
  }
  return url.replace(rHttps, 'http')
}

export default url2http
