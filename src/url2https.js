import isString from './isString.js'

/**
 * url2https
 * @param url
 */
export const url2https = url => {
  if (!isString(url)) {
    return ''
  }
  if (/^https/.test(url)) {
    return url
  }
  return url.replace(/^http/, 'https')
}

export default url2https
