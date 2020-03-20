/**
 * 缓存允许结果, 使方法只允许一次
 * @param fn
 */
export const once = (fn: Function): Function => {
  let cached: any
  return function() {
    // @ts-ignore
    return cached || (cached = fn.apply(this.arguments))
  }
}

export default once
