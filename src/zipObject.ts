/**
 * 把属性数组跟值数组合并
 * @param props 属性
 * @param values 值
 */
export const zipObject = (props: PropertyKey[], values: any[]) => {
  const result: Record<PropertyKey, any> = {}
  for (const [ index, key ] of props.entries()) {
    result[key] = values[index]
  }
  return result
}
