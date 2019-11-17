const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * 判断key是是否是对象自己的属性
 * @param object {Object}
 * @param key {String}
 * @return {boolean}
 */
export const hasOwn = function(object, key) {
  return hasOwnProperty.call(object, key)
}

/**
 * 判断呢一个值是否为空值
 * @param value {*}
 * @return {boolean}
 */
export const isEmptyValue = function(value) {
  return (
    value === undefined ||
    value === null ||
    value === '' ||
    Number.isNaN(value) ||
    (Array.isArray(value) && value.length === 0)
  )
}

// 调用对象的toString 方法
export const toString = Object.prototype.toString
