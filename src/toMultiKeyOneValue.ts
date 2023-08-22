type targetType = Record<string, any>

const handler:ProxyHandler<targetType> = {
  get: (target, prop) => {
    return target[prop as string]?.value
  },
  set:(obj, prop, value) => {
    let keys: string[] = []
    if (keys.includes(',')) {
      keys = (prop as string).split(',')
    }
    keys = Array.isArray(keys) ? keys : [prop as string]
    const pkgVal = obj[keys.find(key => obj[key])] || { value }
    for (const key of keys) {
      obj[key] = pkgVal
    }
    return true
  }
}

/**
 * 返回一个类, 多个key对应一个value, 其实就是共用一个引用地址
 * @param data
 */
export const toMultiKeyOneValue = (data: any[][]) => {
  const target:targetType = {}
  const proxy = new Proxy(target, handler)
  if (!Array.isArray(data)) {
    console.error('Error parameter', data)
  }
  for (const [keys, value] of data) {
    proxy[keys] = value
  }
  return proxy
}

export default toMultiKeyOneValue
