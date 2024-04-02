import isArray from './isArray'
import isObject from './isObject'
import objectLength from './objectLength'
import { PropObj } from '../types'

/**
 * 判断一个值是否为空值
 * @param obj 对象
 */
export const isEmptyValue = (obj: unknown) => {
  return (
    obj === undefined ||
    obj === null ||
    obj === '' ||
    Number.isNaN(obj) ||
    (isArray(obj) && obj.length === 0) ||
    (isObject(obj) && objectLength(<PropObj>obj) === 0)
  )
}
export default isEmptyValue
