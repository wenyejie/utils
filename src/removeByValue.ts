import isArray from './isArray'

/**
 * 通过值移除数组对象
 * @param data
 * @param value
 */
const removeByValue = <T>(data: T[], value: any): T[] => {
  if (isArray(data) && data.length > 0) {
    const index = data.indexOf(<never>value)
    if (index > -1) {
      data.splice(index, 1)
    }
  }
  return data
}

export default removeByValue
