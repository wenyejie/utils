import globalThis from './globalThis'

export interface ThrottleOptions {
  timeout?: number
  immediate?: boolean
}

const DEFAULT_OPTIONS: ThrottleOptions = {
  timeout: 500,
  immediate: false,
}

/**
 * 函数节流 - 间隔一定时间后执行, 地铁
 * @param fn 函数
 * @param options 选项
 */
export const throttle: {
  <T, R>(fn: (...rest: T[]) => R, options?: ThrottleOptions): (...rest: T[]) => void
  <T, R>(fn: (...rest: T[]) => R, timeout?: ThrottleOptions['timeout']): (...rest: T[]) => void
  <T, R>(fn: (...rest: T[]) => R, immediate?: ThrottleOptions['immediate']): (...rest: T[]) => void
} = <T, R>(
  fn: (...rest: T[]) => R,
  options?: ThrottleOptions | ThrottleOptions['timeout'] | ThrottleOptions['immediate'],
) => {
  let timer: number
  const innerOptions: ThrottleOptions = Object.assign({ ...DEFAULT_OPTIONS }, options)
  if (typeof options === 'boolean') {
    innerOptions.immediate = options
  } else if (typeof options === 'number') {
    innerOptions.timeout = options
  }
  return function (...rest: T[]) {
    if (innerOptions.immediate) {
      fn.apply(this, rest)
      innerOptions.immediate = false
      return
    }
    if (timer) {
      return
    }
    timer = globalThis.setTimeout(() => {
      clearTimeout(timer)

      fn.apply(this, rest)
    }, innerOptions.timeout)
  }
}

export default throttle
