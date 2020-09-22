/**
 * 判断数据是否为JSON类型
 *
 * @author: wenyejie
 * @date: 2018/02/26
 */

export const isJson = obj => {
  try {
    return JSON.stringify(obj) && true
  } catch (e) {
    return false
  }
}

export default isJson
