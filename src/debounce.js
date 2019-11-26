/**
 * 函数防抖 - 当一定时间之后没有重新调用则执行, 电梯
 * @param fn {Function}
 * @param interval {number} 时间间隔
 * @param isFirst {boolean} 第一次是否立即执行
 * @return {Function}
 */
export const debounce = (fn, interval = 500, isFirst = false) => {
  let timer = null
  return function(...rest) {
    clearTimeout(timer)
    if (isFirst) {
      fn.apply(this, rest)
      isFirst = false
      return
    }
    timer = setTimeout(() => {
      fn.apply(this, rest)
    }, interval)
  }
}
export default debounce
