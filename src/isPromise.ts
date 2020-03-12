import isFunction from './isFunction'
import isObject from './isObject'

/**
 * 判断是否为promise
 * @param obj
 */
const isPromise = (obj:any) => isObject(obj) && isFunction(obj) && isFunction(obj.catch)

export default isPromise
