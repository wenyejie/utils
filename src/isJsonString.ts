/**
 * 判断数据是否为JSON String
 *
 * @author: Storm
 * @date: 2018/02/26
 */

export const isJsonString = (obj: any) => {
  try {
    return JSON.parse(obj) && true
  } catch (e) {
    return false
  }
}

export default isJsonString
