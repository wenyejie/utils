import isArray from './isArray'
import isObject from './isObject'
import objectLength from './objectLength'

/**
 * 判断一个值是否为空值
 * @param value
 */
export const isEmptyValue = value => {
  return (
    value === undefined ||
    value === null ||
    value === '' ||
    Number.isNaN(value) ||
    (isArray(value) && value.length === 0) ||
    (isObject(value) && objectLength(value) === 0)
  )
}
export default isEmptyValue
