import { ToRawType, toRawType } from './toRawType'
import { PartialValueOf, valueOf } from '../types'


/**
 * 规范化选项; 自带浅拷贝
 * @param options 用户选项
 * @param defaultOptions 默认选项
 * @param types 类型
 */
export const normalizeOptions = <T extends Record<PropertyKey, any>>(
  options: PartialValueOf<T> | undefined,
  defaultOptions: T,
  types?: Partial<Record<ToRawType, string>>
) => {
  const type = toRawType(options)
  if (type === 'undefined') {
    return { ...defaultOptions }
  }
  if (type === 'object') {
    return { ...defaultOptions, ...<T>options }
  }
  const innerOptions = { ...defaultOptions }
  if (toRawType(types) === 'object') {
    innerOptions[types[type] as keyof T] = <valueOf<T>>options
  } else {
    for (const [key, value] of Object.entries(defaultOptions)) {
      if (toRawType(value) === type) {
        innerOptions[key as keyof T] = <valueOf<T>>options
        break
      }
    }
  }
  return innerOptions
}

