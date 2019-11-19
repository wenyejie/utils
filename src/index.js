const hasOwnProperty = Object.prototype.hasOwnProperty

// 1121

/**
 * 判断key是是否是对象自己的属性
 * @param object {Object}
 * @param key {String}
 * @return {boolean}
 */
export const hasOwn = (object, key) => hasOwnProperty.call(object, key)

/**
 * 判断呢一个值是否为空值
 * @param value {*}
 * @return {boolean}
 */
export const isEmptyValue = value =>
  value === undefined ||
  value === null ||
  value === '' ||
  Number.isNaN(value) ||
  (Array.isArray(value) && value.length === 0)

// 调用对象的toString 方法
export const objectToString = Object.prototype.toString

export const toTypeString = obj => objectToString.call(obj)

export const toRawType = value => toTypeString(value).slice(8, -1)

// 电话号码
export const phoneNO = /^1\d{10}$/

// 身份证号码
export const idNO = /^[1-9]\d{7}((0\d)|(1[0-2]))(([012]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([012]\d)|3[0-1])\d{3}([0-9]|X)$/

export const isArray = Array.isArray

export const isFunction = obj => typeof obj === 'function'

export const isRegExp = obj => toTypeString(obj) === '[object RegExp]'

export const isDate = obj => toTypeString(obj) === '[object Date]'

export const isString = obj => typeof obj === 'string'

export const isSymbol = obj => typeof obj === 'symbol'

export const isObject = obj => obj !== null && typeof obj === 'object'

export const isPrimitive = obj => {
  const type = typeof obj
  return type === 'string' || type === 'number' || type === 'boolean'
}

export const isPlainObject = val => toTypeString(val) === '[object Object]'

export const isPromise = obj =>
  isObject(obj) && isFunction(obj.then) && isFunction(obj.catch)

export { throttle } from './throttle.js'

export {
  isNumber,
  isPlainNumber,
  isInteger,
  isNaturalNumber,
  isPositiveInteger
} from './number.js'
