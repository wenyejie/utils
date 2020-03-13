import isArray from './isArray'
import isObject from './isObject'
import hasOwn from './hasOwn'

/**
 * 根据键值对从数组中查找子项
 * @param data
 * @param key
 * @param value
 */
const findByProps = (data: object[], key: PropertyKey | object, value?: any): object => {
  const props: object = isObject(key) ? <object>key : { [<PropertyKey>key]: value }
  if (!isArray(data) || !isObject(props)) {
    return []
  }
  return data.find((item: object) => {
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

export default findByProps
