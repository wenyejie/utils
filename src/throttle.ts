import globalThis from './globalThis'

/**
 * 函数节流 - 间隔一定时间后执行, 地铁
 * @param fn 函数
 * @param interval 时间间隔
 * @param isFirst 第一次是否立即执行
 */
export const throttle = (fn: (...rest: any[]) => any, interval = 500, isFirst = false) => {
  // 定时器
  let timer: string | number | NodeJS.Timeout
  return function(...rest: any[]) {
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
