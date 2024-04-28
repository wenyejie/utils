import { ToRawType, toRawType } from './toRawType'
import { PartialValueOf, valueOf } from '../types'


/**
 * 规范化选项; 自带浅拷贝
 * @param options 用户选项
 * @param types 类型
 * @param defaultOptions 默认选项
 */
export const normalizeOptions = <T extends Record<string, any>>(options:  PartialValueOf<T>, types: Partial<Record<ToRawType, string>>, defaultOptions: T) => {
  const type = toRawType(options)
  if (type === 'undefined') {
    return { ...defaultOptions }
  }
  if (type === 'object') {
    return { ...<T>options }
  }
  const innerOptions = { ...defaultOptions }
  innerOptions[types[type] as keyof T] = <valueOf<T>>options
  return innerOptions
}

