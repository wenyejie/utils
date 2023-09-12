/**
 * 判断是否为无效值
 * @param obj 对象
 */
export const isVoid = (obj: unknown) => {
  return obj === undefined || obj === null || Number.isNaN(obj)
}

export default isVoid
