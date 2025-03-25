import { type AnyFn, PartialValueOf } from '../types'
import { PLACEHOLDER } from './utils'
import { normalizeOptions } from './normalizeOptions'
import { isPositiveNumber } from './isPositiveNumber'

export interface OnceOptions {
  timeout: number
  needRemove: boolean
}

const ONCE_DEFAULT_OPTIONS: OnceOptions = {
  timeout: 0,
  needRemove: false
}

export type RemoveFn = () => void

/**
 * 临时缓存数据
 * @param fn 执行函数
 * @param [options] 选项
 * @param [options.timeout = 0] 缓存数据过期时间
 * @param [options.needRemove = false] 立即移除数据
 */
export const once: {
  <T extends AnyFn>(fn: T): T,
  <T extends AnyFn>(fn: T, timeout: OnceOptions['timeout']): T
  <T extends AnyFn>(fn: T, needRemove: OnceOptions['needRemove']): [T, RemoveFn]
  <T extends AnyFn>(fn: T, options: Partial<OnceOptions>): [T, RemoveFn]
} = <T extends AnyFn>(fn: T, options?: PartialValueOf<OnceOptions>): T | [T, RemoveFn] => {
  const { timeout, needRemove } = normalizeOptions(options, ONCE_DEFAULT_OPTIONS)
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

/**
 * 缓存执行结果, 只有一次
 * @param fn
 */
export const cachedOne = once

