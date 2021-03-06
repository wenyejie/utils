import isArray from './isArray.js'
import isObject from './isObject.js'
import hasOwn from './hasOwn.js'

export const each = (data, fn) => {
  if (!isArray(data) && !isObject(data)) {
    return
  }
  if (isArray(data)) {
    for (let i = 0; i < data.length; i++) {
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

export default each
