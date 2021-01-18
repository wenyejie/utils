import globalThis from './globalThis.js'

/**
 * 函数节流 - 间隔一定时间后执行, 地铁
 * @param fn {Function} 函数
 * @param interval {Number} 时间间隔
 * @param isFirst {boolean} 第一次是否立即执行
 * @return {Function}
 */
export const throttle = (fn, interval = 500, isFirst = true) => {
  // 定时器
  let timer
  return function(...rest) {
    if (isFirst) {
      fn.apply(this, rest)
      isFirst = false
      return
    }
    if (timer) {
      return
    }
    timer = globalThis.setTimeout(() => {
      clearTimeout(timer)

      fn.apply(this, rest)
    }, interval)
  }
}

export default throttle
