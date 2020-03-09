// 数组去重
import { isArray, isObject } from './common.js'

export const arrayUnique = array => Array.from(new Set(array))

// 移除数组子项
export const arrayRemove = (array, item) => {
  if (Array.isArray(array) && array.length) {
    const index = array.indexOf(item)
    if (index > -1) {
      array.splice(index, 1)
    }
  }
  return array
}

/**
 * 根据属性从数组中获取对象
 * @param array {Object[]}
 * @param props {Object}
 * @return {Object | undefined}
 */
export const findByProps = (array, props) => {
  if (!isArray(array) || !isObject(props)) {
    return
  }
  return array.find(item => {
    if (!isObject(item)) {
      return false
    }
    for (let key in props) {
      if (item[key] !== props[key]) {
        return false
      }
    }
    return true
  })
}

export default {
  arrayUnique,
  findByProps
}
