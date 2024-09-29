import type { AnyFn } from '../types'
import { PLACEHOLDER } from './utils'

type RemoveFn = () => void

/**
 * 缓存允许结果, 使方法只允许一次
 * @param fn 函数
 * @param needRemove 需要移除方法
 */
export const once: {
  <T extends AnyFn>(fn: T): T,
  <T extends AnyFn>(fn: T, needRemove?: boolean): [T, RemoveFn]
} = <T extends AnyFn>(fn: T, needRemove?: boolean): T | [T, RemoveFn] => {
  let cached = PLACEHOLDER

  const rtnFn = function () {
    if (cached !== PLACEHOLDER) {
      return cached
    }
    cached = fn.apply(this, arguments)
    return cached
  } as T
  if (needRemove) {
    return [rtnFn, () => cached = PLACEHOLDER]
  } else {
    return rtnFn
  }
}
