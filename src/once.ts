/**
 * 缓存允许结果, 使方法只允许一次
 * @param fn 函数
 */
export const once = <T extends AnyFn>(fn: T): T => {
  let cached: unknown
  return function () {
    return cached || (cached = fn.apply(this, arguments))
  } as T
}

export default once
