import isArray from './isArray'
type ToMultiKeyOneValueTargetType = Record<string, any>

const handler: ProxyHandler<ToMultiKeyOneValueTargetType> = {
  get: (target, prop) => {
    return target[<string>prop]?.value
  },
  set: (obj, prop, value) => {
    let keys: string[] = []
    if (keys.includes(',')) {
      keys = (<string>prop).split(',')
    }
    keys = isArray(keys) ? keys : [<string>prop]
    const pkgVal = obj[keys.find((key) => obj[key])] || { value }
    for (const key of keys) {
      obj[key] = pkgVal
    }
    return true
  },
}

/**
 * 返回一个类, 多个key对应一个value, 其实就是共用一个引用地址
 * @param data 数据
 */
export const toMultiKeyOneValue = (data: any[][]) => {
  const target: ToMultiKeyOneValueTargetType = {}
  const proxy = new Proxy(target, handler)
  if (!isArray(data)) {
    console.error('Error parameter', data)
  }
  for (const [keys, value] of data) {
    proxy[keys] = value
  }
  return proxy
}

export default toMultiKeyOneValue
