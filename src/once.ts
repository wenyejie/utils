import type { AnyFn } from '../types'

const CACHED_PLACEHOLDER = Symbol('CACHED_PLACEHOLDER')

/**
 * 缓存允许结果, 使方法只允许一次
 * @param fn 函数
 */
export const once = <T extends AnyFn>(fn: T): T => {
  let cached = CACHED_PLACEHOLDER
  return function() {
    if (cached !== CACHED_PLACEHOLDER) {
      return cached
    }
    cached = fn.apply(this, arguments)
    return cached
  } as T
}

