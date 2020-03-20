/**
 * 随机整数
 * @param max
 * @param min
 */
const randomInteger = (max: number, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min

export default randomInteger
