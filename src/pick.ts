import isObject from './isObject'

/**
 * 从一个对象中选中一些属性并返回一个新函数,不影响原有对象
 * @param data
 * @param rest
 */
export const pick = (data: Record<any, any>, ...rest: any[]): {} => {
  const result: Record<any, any> = {}
  if (isObject(data)) {
    rest.forEach((key: string) => {
      result[key] = data[key]
    })
  }
  return result
}

export default pick
