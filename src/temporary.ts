import { once, type OnceOptions, RemoveFn } from './once'
import type { AnyFn, PartialValueOf } from '../types'
import { normalizeOptions } from '@/normalizeOptions'

const TEMPORARY_DEFAULT_OPTIONS: OnceOptions = {
  timeout: 500,
  needRemove: false,
}

/**
 * 临时缓存数据
 * @param fn 执行函数
 * @param [options] 选项
 * @param [options.timeout = 500] 缓存数据过期时间
 * @param [options.needRemove = false] 立即移除数据
 */
export const temporary: {
  <T extends AnyFn>(fn: T): T
  <T extends AnyFn>(fn: T, timeout: OnceOptions['timeout']): T
  <T extends AnyFn>(fn: T, needRemove: OnceOptions['needRemove']): [T, RemoveFn]
  <T extends AnyFn>(fn: T, options: Partial<OnceOptions>): [T, RemoveFn]
} = <T extends AnyFn>(fn: T, options?: PartialValueOf<OnceOptions>): T | [T, RemoveFn] => once(fn, normalizeOptions(options, TEMPORARY_DEFAULT_OPTIONS))
