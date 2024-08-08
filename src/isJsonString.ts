import { isString } from './isString'

/**
 * 断数据是否为JSON String
 * @param obj
 */
export const isJsonString = (obj: unknown) => {
  if (!isString(obj)) {
    return false
  }
  try {
    JSON.parse(<string>obj)
    return true
  } catch (e) {
    return false
  }
}

