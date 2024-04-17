import { globalThis } from './globalThis'
import { normalizeOptions } from '@/normalizeOptions'

export interface ThrottleOptions {
  timeout: number
  immediate: boolean
}

const DEFAULT_OPTIONS: ThrottleOptions = {
  timeout: 500,
  immediate: false,
}

const THROTTLE_TYPES = {
  'number': 'timeout',
  'boolean': 'immediate'
}

/**
 * 函数节流 - 间隔一定时间后执行, 地铁
 * @param fn 函数
 * @param options 选项
 */
export const throttle: {
  <T, R>(fn: (...rest: T[]) => R): (...rest: T[]) => void
  <T, R>(fn: (...rest: T[]) => R, options?: Partial<ThrottleOptions>): (...rest: T[]) => void
  <T, R>(fn: (...rest: T[]) => R, timeout?: ThrottleOptions['timeout']): (...rest: T[]) => void
  <T, R>(fn: (...rest: T[]) => R, immediate?: ThrottleOptions['immediate']): (...rest: T[]) => void
} = <T, R>(
  fn: (...rest: T[]) => R,
  options?: Partial<ThrottleOptions> | ThrottleOptions['timeout'] | ThrottleOptions['immediate'],
) => {
  let timer: number = 0
  const { immediate, timeout } = normalizeOptions(options, THROTTLE_TYPES, DEFAULT_OPTIONS)
  let innerImmediate = immediate;
  return function (...rest: T[]) {
    if (innerImmediate) {
      fn.apply(this, rest)
      innerImmediate = false
      return
    }
    if (timer) {
      return
    }
    timer = globalThis.setTimeout(() => {
      clearTimeout(timer)

      fn.apply(this, rest)
    }, timeout)
  }
}

