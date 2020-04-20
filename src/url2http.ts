import isString from './isString'

/**
 * url2https
 * @param url
 */
export const url2http = (url: string): string => {
  if (!isString(url)) {
    return ''
  }
  if (!/^https/.test(url)) {
    return url
  }
  return url.replace(/^https/, 'http')
}

export default url2http
