import isString from './isString'
import globalThis from './globalThis'

/**
 * 判断两个链接地址是否为同一个域名, 是否会跨域
 * @param urlA url地址A
 * @param urlB url地址B 默认为location当前链接
 */
export const isSameHost = (urlA: string, urlB?: string) => {
  if (!isString(urlA)) {
    console.error(`"${urlA}" is not a string`)
    return false
  }
  const innerUrlA = new URL(urlA)
  let innerUrlB: URL | Location = isString(urlB) ? new URL(urlB) : globalThis.location
  return innerUrlA.host === innerUrlB.host
}

export default isSameHost
