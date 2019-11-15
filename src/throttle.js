/**
 * 函数节流
 * @param fn {Function} 函数
 * @param interval {Number} 时间间隔
 * @return {Function}
 */
export function throttle (fn, interval = 500) {
  // 定时器
  let timer = null
  // 是否为第一次
  let isFirst = true
  return function (...rest) {
    if (isFirst) {
      fn.apply(this, rest)
      isFirst = false
      return
    }
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null
      fn.apply(this, rest)
    }, interval)
  }
}

export default throttle
