/**
 * 判断数据是否为JSON String
 *
 * @author: wenyejie
 * @date: 2018/02/26
 */

export const isJsonString = obj => {
  try {
    return JSON.parse(obj) && true
  } catch (e) {
    return false
  }
}

export default isJsonString
