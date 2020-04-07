import isArray from './isArray'
import isObject from './isObject'
import hasOwn from './hasOwn'
import nullProtoObject from './nullProtoObject'

/**
 * 根据键值对从数组中查找子项
 * @param data
 * @param key
 * @param value
 */
export const findItemByProps = (
  data: any[],
  key: PropertyKey | {},
  value?: any
): Record<any, any> => {
  const props: Record<any, any> = isObject(key)
    ? <Record<any, any>>key
    : { [<PropertyKey>key]: value }
  if (!isArray(data) || !isObject(props)) {
    return null
  }
  return data.find((item: Record<any, any>) => {
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
}

export default findItemByProps
