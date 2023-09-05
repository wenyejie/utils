/**
 * 判断数据是否为JSON类型
 * @param obj
 */
export const isJson = (obj: unknown) => {
  try {
    return JSON.stringify(obj) && true
  } catch (e) {
    return false
  }
}

export default isJson
