import isFunction from './isFunction.js'
import isObject from './isObject.js'

/**
 * 判断是否为promise
 * @param obj
 */
export const isPromise = obj => isObject(obj) && isFunction(obj) && isFunction(obj.catch)

export default isPromise
