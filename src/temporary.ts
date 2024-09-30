import { type AnyFn, PartialValueOf } from '../types'
import { PLACEHOLDER } from './utils'
import { normalizeOptions } from './normalizeOptions'
import { isPositiveNumber } from './isPositiveNumber'

interface TemporaryOptions {
  timeout: number
  needRemove: boolean
}

const TEMPORARY_DEFAULT_OPTIONS: TemporaryOptions = {
  timeout: 500,
  needRemove: false
}

type RemoveFn = () => void

/**
 * 临时缓存
 * @param fn
 * @param options
 */
export const temporary: {
  <T extends AnyFn>(fn: T): T,
  <T extends AnyFn>(fn: T, timeout: TemporaryOptions['timeout']): T
  <T extends AnyFn>(fn: T, needRemove: TemporaryOptions['needRemove']): [T, RemoveFn]
  <T extends AnyFn>(fn: T, options: Partial<TemporaryOptions>): [T, RemoveFn]
} = <T extends AnyFn>(fn: T, options?: PartialValueOf<TemporaryOptions>): T | [T, RemoveFn] => {
  const { timeout, needRemove } = normalizeOptions(options, TEMPORARY_DEFAULT_OPTIONS)
  let cached = PLACEHOLDER
  let timer = 0
  const rtnFn = function () {
    if (cached !== PLACEHOLDER) {
      return cached
    }
    cached = fn.apply(this, arguments)
    if (isPositiveNumber(timeout)) {
      timer = window.setTimeout(() => cached = PLACEHOLDER, timeout)
    }
    return cached
  } as T
  if (needRemove) {
    return [
      rtnFn,
      () => {
        clearTimeout(timer)
        cached = PLACEHOLDER
      },
    ]
  } else {
    return rtnFn
  }
}
