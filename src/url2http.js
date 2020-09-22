import isString from './isString.js'

/**
 * url2https
 * @param url
 */
export const url2http = url => {
  if (!isString(url)) {
    return ''
  }
  if (!/^https/.test(url)) {
    return url
  }
  return url.replace(/^https/, 'http')
}

export default url2http
