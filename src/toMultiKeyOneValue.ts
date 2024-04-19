export interface ToMultiKeyOneValueItem {
  value: unknown
}

const handler: ProxyHandler<Record<string, ToMultiKeyOneValueItem>> = {
  get: (target, prop) => {
    return target[<string>prop]?.value
  },
  set: (obj, prop: string, value) => {
    obj[prop] = value
    return true
  }
}

/**
 * 返回一个类, 多个key对应一个value, 其实就是共用一个引用地址
 * @param data 数据
 */
export const toMultiKeyOneValue = <T extends string, V>(data: [ T[], V ][]) => {
  const proxy = new Proxy({}, handler)
  if (!Array.isArray(data)) {
    console.error(`"${ data }" is not a array`)
    return
  }
  for (const [ keys, value ] of data) {
    const innerValue = { value }
    for (const key of keys) {
      proxy[key] = innerValue
    }
  }
  return proxy as Record<T, V>
}

