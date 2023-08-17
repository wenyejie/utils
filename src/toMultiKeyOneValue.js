/**
 * 返回一个类, 多个key对应一个value, 其实就是共用一个引用地址
 * @param data {any[][]}
 */
export const toMultiKeyOneValue = (data) => {
  const target = {}
  const proxy = new Proxy(target, {
    get: (target, prop) => {
      return target[prop]?.value
    },
    set:(obj, keys, value) => {
      if (keys.includes(',')) {
        keys = keys.split(',')
      }
      keys = Array.isArray(keys) ? keys : [keys]
      const pkgVal = keys.find(key => obj[key]) || { value }
      for (const key of keys) {
        obj[key] = pkgVal
      }
      return true
    }
  })
  if (!Array.isArray(data)) {
    console.error('Error parameter', data)
  }
  for (const [keys, value] of data) {
    proxy[keys] = value
  }
  return proxy
}

export default toMultiKeyOneValue
