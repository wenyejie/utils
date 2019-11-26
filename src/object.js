import { nullObject, isObject } from './common.js'

// 获取对象属性集合
export const getObjectProp = (obj, ...rest) => {
  const result = {}
  if (isObject(obj)) {
    rest.forEach(key => (result[key] = obj[key]))
  }
  return result
}

export default {
  getObjectProp
}
