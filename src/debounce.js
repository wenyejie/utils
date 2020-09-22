/**
 * 函数防抖 - 当一定时间之后没有重新调用则执行, 电梯
 * @param fn
 * @param interval 时间间隔
 * @param isFirst 第一次是否立即执行
 */
export const debounce = (fn, interval = 500, isFirst = false) => {
  let timer
  return function(...rest) {
    clearTimeout(timer)
    if (isFirst) {
      fn.apply(this, rest)
      isFirst = false
    }

    timer = setTimeout(() => {
      fn.apply(this, rest)
    }, interval)
  }
}

export default debounce
