import { isPrimitive } from './isPrimitive'
import { toRawType } from './toRawType'
import type { PropObj } from '../types'

type ArrayOrObject = unknown[] | PropObj

const linkIterableObj = {
  set: Set,
  map: Map,
  weakSet: WeakSet,
  weakMap: WeakMap
}

/**
 * 克隆一个对象
 * @param obj 对象
 * @param deep 是否需要深度克隆
 * @param weakMap weakMap 避免死循环
 */
export const clone = <T>(obj: T, deep = true, weakMap = new WeakMap()): T => {
  const type = toRawType(obj)
  if (isPrimitive(obj) || type === 'function') {
    return obj
  }

  if (Object.hasOwn(linkIterableObj, type)) {
    return new linkIterableObj[type](obj)
  }

  if (weakMap.get(<ArrayOrObject>obj)) {
    return weakMap.get(<ArrayOrObject>obj)
  }

  const result = type === 'array' ? [] : {}
  weakMap.set(<ArrayOrObject>obj, result)
  const keys = Object.keys(obj)
  let key: string
  for (let i = 0, length = keys.length; i < length; i++) {
    key = keys[i]
    result[key] = deep ? clone(obj[key], deep, weakMap) : obj[key]
  }
  return <T>result
}

