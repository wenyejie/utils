/**
 * 判断是否为对象
 * @param obj
 */
const isObject = (obj:any):boolean => obj !== null && typeof obj === 'object'

export default isObject
