/**
 * 等待一些时间
 * @param time
 */
export const wait = (time = 300) => {
  return new Promise(resolve => setTimeout(resolve, time));
}
