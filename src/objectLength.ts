import isObject from './isObject'

/**
 * 获取对象长度
 * @param obj 对象
 */
export const objectLength = (obj: Record<PropertyKey, any>) => {
  if (!isObject(obj)) {
    return 0
  }
  return Object.keys(obj).length
}

export default objectLength
