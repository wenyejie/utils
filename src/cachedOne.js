/**
 * 缓存执行结果, 只有一次
 * @param fn
 */
export const cachedOne = fn => {
  let cached = null
  return function() {
    if (caches !== null) {
      return cached
    }
    return (cached = fn.apply(this, arguments))
  }
}

export default cachedOne
