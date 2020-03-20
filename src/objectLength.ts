import isObject from './isObject'

/**
 * 获取对象长度
 * @param obj
 */
export const objectLength = (obj: any) => {
  if (!isObject(obj)) {
    return 0
  }
  return Object.keys(obj).length
}

export default objectLength
