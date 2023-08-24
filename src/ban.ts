import isObject from './isObject'

/**
 * 从对象中选中一些属性移除, 剩下的属性组成新的对象并返回,不影响原有对象
 * @param data 数据
 * @param rest 移除key
 */
export const ban = <T extends PropObj>(data: T, ...rest: PropKey[]) => {
  let result: PropObj = {}
  if (!isObject(data)) {
    return result
  }
  result = { ...data }
  rest.forEach(key => {
    delete result[key]
  })
  return result
}

export default ban
