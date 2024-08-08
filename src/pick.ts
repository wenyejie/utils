import { isObject } from './isObject'

/**
 * 从一个对象中选中一些属性并返回一个新函数,不影响原有对象
 * @param obj 对象
 * @param rest 选中key
 */
export const pick = <P extends string, T extends Record<P, unknown>>(obj: T, ...rest: P[] | P[][]) => {
  const result: Partial<T> = {}
  if (isObject(obj)) {
    (rest.flat() as P[]).forEach(key => {
      result[key] = obj[key]
    })
  }
  return result
}

