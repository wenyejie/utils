/**
 * 函数节流 - 间隔一定时间后执行, 地铁
 * @param fn {Function} 函数
 * @param interval {Number} 时间间隔
 * @param isFirst {boolean} 第一次是否立即执行
 * @return {Function}
 */
export const throttle = (
  fn: Function,
  interval: number = 500,
  isFirst: boolean = true
): Function => {
  // 定时器
  let timer: number
  return function(...rest: any[]) {
    if (isFirst) {
      // @ts-ignore
      fn.apply(this, rest)
      isFirst = false
      return
    }
    if (timer) {
      return
    }
    timer = window.setTimeout(() => {
      clearTimeout(timer)
      // @ts-ignore
      fn.apply(this, rest)
    }, interval)
  }
}

export default throttle
