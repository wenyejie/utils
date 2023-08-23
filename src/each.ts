import isArray from './isArray'
import isObject from './isObject'
import hasOwn from './hasOwn'

/**
 * 遍历
 * @param data 数据
 * @param fn 回调
 */
export const each: {
  (data: any[], fn: (...rest: any[]) => any): void
  (data: Record<any, any>, fn: (...rest: any[]) => any): void
} = (data: any[] | Record<any, any>, fn: (...rest: any[]) => any) => {
  if (!isArray(data) && !isObject(data)) {
    return
  }
  if (isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      if (fn.call(data[i], data[i], i, data) === false) {
        return
      }
    }
  } else {
    for (let key in data) {
      if (!hasOwn(data, key)) {
        continue
      }
      if (fn.call(data[key], data[key], key, data) === false) {
        return
      }
    }
  }
}

export default each
