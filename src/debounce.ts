/**
 * 函数防抖 - 当一定时间之后没有重新调用则执行, 电梯
 * @param fn
 * @param interval 时间间隔
 * @param isFirst 第一次是否立即执行
 */
export const debounce = (fn: Function, interval = 500, isFirst = false): Function => {
  let timer: number
  return function(...rest: any[]) {
    clearTimeout(timer)
    if (isFirst) {
      // @ts-ignore
      fn.apply(this, rest)
      isFirst = false
    }
    // @ts-ignore
    timer = setTimeout(() => {
      // @ts-ignore
      fn.apply(this, rest)
    }, interval)
  }
}

export default debounce
