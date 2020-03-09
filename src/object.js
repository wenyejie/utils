import { isObject } from './common.js'

/**
 * 选中对象中的key值, 返回一个新对象
 * @param obj {{}}
 * @param rest {string[]}
 * @return {{}}
 */
export const pick = (obj, ...rest) => {
  const result = {}
  if (isObject(obj)) {
    rest.forEach(key => (result[key] = obj[key]))
  }
  return result
}

/**
 * 移除对象中的key, 返回一个新对象
 * @param obj {{}}
 * @param rest {string[]}
 * @return {{}}
 */
export const ban = (obj, ...rest) => {
  let result = {}
  if (!isObject(obj)) {
    return result
  }
  result = { ...obj }
  rest.forEach(key => delete result[key])
  return result
}

/**
 * 获取对象长度
 * @param obj {Object}
 * @return {Number}
 */
export const objectLength = obj => {
  return Object.keys(obj).length
}

export default {
  ban,
  pick
}
