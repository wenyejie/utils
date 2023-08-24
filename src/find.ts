import isArray from './isArray'
import isObject from './isObject'
import hasOwn from './hasOwn'

type Find = {
  <P extends PropKey, T extends Record<P, any>>(obj: T[], key: T): T | null
  <P extends PropKey, T extends Record<P, any>>(obj: T[], key: P, value: any): T | null
}

/**
 * 根据键值对从数组中查找子项
 * @param obj 对象数组
 * @param key 关键字
 * @param value 值
 */
export const find = (<P extends PropKey, T extends Record<P, any>>(obj: T[], key:P | T, value: any) => {
  const props = isObject(key) ? (key as T) : { [key as P]: value }
  if (!isArray(obj) || !isObject(props)) {
    return null
  }
  return obj.find(item => {
    if (!isObject(item)) {
      return false
    }
    for (let key in props) {
      if (hasOwn(props, key) && item[key] !== props[key]) {
        return false
      }
    }
    return true
  })
}) as Find

export default find
