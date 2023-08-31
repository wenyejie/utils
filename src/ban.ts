import isObject from './isObject'

/**
 * 从对象中选中一些属性移除, 剩下的属性组成新的对象并返回,不影响原有对象
 * @param obj 数据
 * @param rest 移除key
 */
export const ban = <T extends PropObj>(obj: T, ...rest: PropKey[]) => {
  if (!isObject(obj)) {
    console.error(`${obj} is not a object`)
    return
  }
  let result: PropObj = {}
  result = { ...obj }
  rest.forEach((key) => {
    delete result[key]
  })
  return result
}

export default ban
