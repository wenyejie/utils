import { globalThis } from './globalThis'
import { normalizeOptions } from '@/normalizeOptions'

export interface DebounceOptions {
  timeout: number
  immediate: boolean
}

const DEBOUNCE_DEFAULT_OPTIONS: DebounceOptions = {
  timeout: 500,
  immediate: false
}

const DEBOUNCE_TYPES = {
  'number': 'timeout',
  'boolean': 'immediate'
}

/**
 * 函数防抖 - 当一定时间之后没有重新调用则执行, 电梯
 * @param fn 函数
 * @param options 选项
 */
export const debounce: {
  <T, R>(fn: (...rest: T[]) => R): (...rest: T[]) => void
  <T, R>(fn: (...rest: T[]) => R, options: Partial<DebounceOptions>): (...rest: T[]) => void
  <T, R>(fn: (...rest: T[]) => R, timeout: DebounceOptions['timeout']): (...rest: T[]) => void
  <T, R>(fn: (...rest: T[]) => R, immediate: DebounceOptions['immediate']): (...rest: T[]) => void
} = <T, R>(
  fn: (...rest: T[]) => R,
  options?: Partial<DebounceOptions> | DebounceOptions['timeout'] | DebounceOptions['immediate']
) => {
  let timer: number = 0;
  const { immediate, timeout } = normalizeOptions(options, DEBOUNCE_TYPES, DEBOUNCE_DEFAULT_OPTIONS)
  let innerImmediate = immediate;
  return function(...rest: T[]) {
    clearTimeout(timer)
    if (innerImmediate) {
      fn.apply(this, rest)
      innerImmediate = false
    }

    timer = globalThis.setTimeout(fn.bind(this, rest), timeout)
  }
}

