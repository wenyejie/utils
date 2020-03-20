import isObject from './isObject'

/**
 * 获取对象长度
 * @param obj
 */
const objectLength = obj => {
  if (!isObject(obj)) {
    return 0
  }
  return Object.keys(obj).length
}

export default objectLength
