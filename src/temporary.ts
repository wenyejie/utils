import { type AnyFn } from '../types'

const CACHED_PLACEHOLDER = Symbol('CACHED_PLACEHOLDER')

/**
 * 临时缓存
 * @param fn
 * @param timeout
 */
export const temporary = <T extends AnyFn>(fn: T, timeout = 500): T => {
  let cached = CACHED_PLACEHOLDER
  return function () {
    if (cached !== CACHED_PLACEHOLDER) {
      return cached
    }
    cached = fn.apply(this, arguments)
    setTimeout(() => {
      cached = CACHED_PLACEHOLDER
    }, timeout)
    return cached
  } as T
}

export default temporary
