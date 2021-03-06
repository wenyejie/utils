import isString from './isString.js'
import globalThis from './globalThis.js'

/**
 * 判断两个链接地址是否为同一个域名, 是否会跨域
 * @param urlA
 * @param urlB
 */
export const isSameHost = (urlA, urlB = globalThis.location.href) => {
  if (!isString(urlA)) {
    return false
  }
  const $a = document.createElement('a')
  $a.href = urlA
  const $b = document.createElement('a')
  $b.href = urlB
  return $a.host === $b.host
}

export default isSameHost
