/**
 * 缓存执行结果, 当结果输入相同时, 不再执行
 * @param fn
 */
export const cached = fn => {
  const caches = {}
  return function() {
    const args = Array.prototype.join.call(arguments, ',')
    if (args in caches) {
      return caches[args]
    }
    return (caches[args] = fn.apply(this, arguments))
  }
}

export default cached
