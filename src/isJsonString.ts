
import isString from './isString'

/**
 * 断数据是否为JSON String
 * @param obj
 */
export const isJsonString = (obj: unknown) => {
  try {
    if (!isString(obj)) {
      return false
    }
    return JSON.parse(obj as string) && true
  } catch (e) {
    return false
  }
}

export default isJsonString
