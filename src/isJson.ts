/**
 * 判断数据是否为JSON类型
 *
 * @author: Storm
 * @date: 2018/02/26
 */

export const isJson = (obj: any) => {
  try {
    return JSON.stringify(obj) && true
  } catch (e) {
    return false
  }
}

export default isJson
