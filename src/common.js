export const emptyObject = Object.freeze({})

// 空函数
export const noop = function() {}

// 没有原型链的空对象
export const nullObject = () => Object.create(null)

export const hasOwnProperty = Object.prototype.hasOwnProperty

// 判断key是是否是对象自己的属性
export const hasOwn = (object, key) => {
  if (object === null || object === undefined) {
    return false
  }
  return hasOwnProperty.call(object, key)
}

// 判断呢一个值是否为空值
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

export const isArray = Array.isArray

export const isFunction = obj => typeof obj === 'function'

export const isRegExp = obj => toTypeString(obj) === '[object RegExp]'

export const isString = obj => typeof obj === 'string'

export const isSymbol = obj => typeof obj === 'symbol'

export const isObject = obj => obj !== null && typeof obj === 'object'

export const isBoolean = obj => obj === true || obj === false

export const isPrimitive = obj => {
  const type = typeof obj
  return type === 'string' || type === 'number' || type === 'boolean'
}

export const isPlainObject = val => toTypeString(val) === '[object Object]'

export const isPromise = obj => isObject(obj) && isFunction(obj.then) && isFunction(obj.catch)

/**
 * 对数据进行遍历
 * @param data {{} | []}
 * @param fn {Function}
 */
export const each = (data, fn) => {
  if (!isArray(data) && !isObject(data)) {
    return
  }
  if (isArray(data)) {
    for (let i = 0; i <= data.length; i++) {
      if (fn.call(data[i], data[i], i, data) === false) {
        return
      }
    }
  } else {
    for (let key in data) {
      if (!hasOwn(data, key)) {
        continue
      }
      if (fn.call(data[key], data[key], key, data) === false) {
        return
      }
    }
  }
}

// 记住执行结果, 使函数或计算只执行一次
export const once = fn => {
  let cached
  return function() {
    return cached || (cached = fn.apply(this, arguments))
  }
}

// 缓存执行结果, 当结果输入相同时, 不再执行
export const cached = fn => {
  const caches = {}
  return function() {
    const args = Array.prototype.join.call(arguments, ',')
    if (args in caches) {
      return caches[args]
    }
    return (caches[args] = fn.apply(this, arguments))
  }
}

/**
 * 补零
 * @param num {number|string}
 * @param len {number}
 * @param isPrepend {boolean}
 * @return {string}
 */
export const zeroize = (num, len = 2, isPrepend = true) => {
  // 获取当前number长度
  const l = (num + '').length

  // 如果当前number长度大于目标长度则退出
  if (l >= len) {
    return num + ''
  }

  let temp = ''
  for (let i = 0; i < len - l; ++i) {
    temp += '0'
  }

  return isPrepend ? temp + num : num + temp
}

export default {
  noop,
  emptyObject,
  nullObject,
  hasOwnProperty,
  hasOwn,
  isEmptyValue,
  objectToString,
  toTypeString,
  toRawType,
  isArray,
  isFunction,
  isRegExp,
  isString,
  isSymbol,
  isObject,
  isPrimitive,
  isPlainObject,
  isPromise,
  each,
  once,
  cached
}
