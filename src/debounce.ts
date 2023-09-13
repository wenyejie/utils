import globalThis from './globalThis'

export interface DebounceOptions {
  timeout?: number
  immediate?: boolean
}

const DEFAULT_OPTIONS: DebounceOptions = {
  timeout: 500,
  immediate: false,
}

/**
 * 函数防抖 - 当一定时间之后没有重新调用则执行, 电梯
 * @param fn 函数
 * @param options 选项
 */
export const debounce: {
  <T, R>(fn: (...rest: T[]) => R, options?: DebounceOptions): (...rest: T[]) => void
  <T, R>(fn: (...rest: T[]) => R, timeout?: DebounceOptions['timeout']): (...rest: T[]) => void
  <T, R>(fn: (...rest: T[]) => R, immediate?: DebounceOptions['immediate']): (...rest: T[]) => void
} = <T, R>(
  fn: (...rest: T[]) => R,
  options?: DebounceOptions | DebounceOptions['timeout'] | DebounceOptions['immediate'],
) => {
  let timer: number
  const innerOptions: DebounceOptions = Object.assign({ ...DEFAULT_OPTIONS }, options)
  if (typeof options === 'boolean') {
    innerOptions.immediate = options
  } else if (typeof options === 'number') {
    innerOptions.timeout = options
  }
  return function (...rest: T[]) {
    clearTimeout(timer)
    if (innerOptions.immediate) {
      fn.apply(this, rest)
      innerOptions.immediate = false
    }

    timer = globalThis.setTimeout(fn.bind(this, rest), innerOptions.timeout)
  }
}

export default debounce
