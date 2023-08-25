import isObject from './isObject'

/**
 * 从对象中选中一些属性移除, 剩下的属性组成新的对象并返回,不影响原有对象
 * @param obj 数据
 * @param rest 移除key
 */
export const ban = <T extends PropObj>(obj: T, ...rest: PropKey[]) => {
  let result: PropObj = {}
  if (!isObject(obj)) {
    return result
  }
  result = { ...obj }
  rest.forEach((key) => {
    delete result[key]
  })
  return result
}

export default ban
