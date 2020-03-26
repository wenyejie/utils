/**
 * 随机数
 * @param max
 * @param min
 */
export const randomNumber = (max: number, min = 0) => Math.random() * (max - min) + min

export default randomNumber
