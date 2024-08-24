import { globalThis } from './globalThis'
import { normalizeOptions } from './normalizeOptions'
import { PartialValueOf } from '../types'

export interface DebounceOptions {
  timeout: number
  immediate: boolean
}

const DEBOUNCE_DEFAULT_OPTIONS: DebounceOptions = {
  timeout: 500,
  immediate: false
}

/**
 * 函数防抖 - 当一定时间之后没有重新调用则执行, 电梯
 * @param fn 函数
 * @param options 选项
 */
export const debounce = <T, R>(fn: (...args: T[]) => R, options?: PartialValueOf<DebounceOptions>) => {
  let timer: number = 0
  let { immediate, timeout } = normalizeOptions(options, DEBOUNCE_DEFAULT_OPTIONS)
  return function(...args: T[]) {
    clearTimeout(timer)
    if (immediate) {
      fn.apply(this, args)
      immediate = false
    }

    timer = globalThis.setTimeout(fn.bind(this, ...args), timeout)
  }
}

