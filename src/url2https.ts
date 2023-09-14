import isString from './isString'
import { rHttp, rHttps } from './regexp'

/**
 * url2https
 * @param url url地址
 */
export const url2https = (url: string) => {
  if (!isString(url)) {
    console.error(`"${url}" is not a string`)
    return ''
  }
  if (rHttps.test(url)) {
    return url
  }
  return url.replace(rHttp, 'https')
}

export default url2https
