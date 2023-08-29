import globalThis from './globalThis'

/**
 * 函数节流 - 间隔一定时间后执行, 地铁
 * @param fn 函数
 * @param interval 时间间隔
 * @param immediate 立刻执行
 */
export const throttle = (fn: (...rest: any[]) => any, interval = 500, immediate = false) => {
  // 定时器
  let timer: string | number | NodeJS.Timeout
  return function (...rest: any[]) {
    if (immediate) {
      fn.apply(this, rest)
      immediate = false
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
