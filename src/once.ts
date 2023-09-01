/**
 * 缓存允许结果, 使方法只允许一次
 * @param fn 函数
 */
export const once = (fn: AnyFn) => {
  let cached
  return function () {
    return cached || (cached = fn.apply(this, arguments))
  }
}

export default once
