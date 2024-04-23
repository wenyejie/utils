/**
 * 把多个数组合并成一个
 * @param arrays 数组集合
 */
export const zip = (...arrays: any[][]) => {
  const result: any[][] = [];
  if (arrays.length <= 0) {
    return result;
  }

  for (let i = 0; i < arrays[0].length; i++) {
    result[i] = [];
    for (let j = 0; j < arrays.length; j++) {
      result[i].push(arrays[j][i])
    }
  }
  return result;
}
