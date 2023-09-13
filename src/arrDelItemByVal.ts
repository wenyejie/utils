/**
 * 删除数组中的值
 * @param array 数组
 * @param values 值
 */
export const arrDelItemByVal = <A extends unknown>(array: A[], ...values: A[]) => {
  for (const value of values) {
    const index = array.indexOf(value)
    array.splice(index, 1)
  }
  return array
}

export default arrDelItemByVal
