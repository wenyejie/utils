import globalThis from './globalThis'
/**
 * 函数防抖 - 当一定时间之后没有重新调用则执行, 电梯
 * @param fn
 * @param interval 时间间隔
 * @param isFirst 第一次是否立即执行
 */
export const debounce = (fn: (...rest: any[]) => void, interval = 500, isFirst = false) => {
  let timer: number
  return function (...rest: any[]) {
    clearTimeout(timer)
    if (isFirst) {
      fn.apply(this, rest)
      isFirst = false
    }

    timer = globalThis.setTimeout(() => {
      fn.apply(this, rest)
    }, interval)
  }
}

export default debounce
