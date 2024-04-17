import { isObject } from './isObject'
import type { PropObj } from '../types'

/**
 * 获取对象长度
 * @param obj 对象
 */
export const objectLength = (obj: PropObj) => {
  if (!isObject(obj)) {
    console.error(`"${obj}" is not a Object`)
    return 0
  }
  return Object.keys(obj).length
}

