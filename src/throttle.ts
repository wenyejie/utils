import { globalThis } from './globalThis'
import { normalizeOptions } from '@/normalizeOptions'
import { PartialValueOf } from '../types'

export interface ThrottleOptions {
  timeout: number
  immediate: boolean
}

const DEFAULT_OPTIONS: ThrottleOptions = {
  timeout: 500,
  immediate: false
}

/**
 * 函数节流 - 间隔一定时间后执行, 地铁
 * @param fn 函数
 * @param options 选项
 */
export const throttle= <T, R>(fn: (...args: T[]) => R, options?: PartialValueOf<ThrottleOptions>) => {
  let timer: number = 0
  let { immediate, timeout } = normalizeOptions(options, DEFAULT_OPTIONS)
  return function(...args: T[]) {
    if (immediate) {
      fn.apply(this, args)
      immediate = false
      return
    }
    if (timer) {
      return
    }
    timer = globalThis.setTimeout(() => {
      clearTimeout(timer)
      timer = 0
      fn.apply(this, args)
    }, timeout)
  }
}

