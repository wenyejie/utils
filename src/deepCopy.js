import { hasOwn, isArray, isObject } from './index.js'

export const deepCopy = obj => {
  if (!isObject(obj)) {
    return obj
  }

  if (isArray(obj)) {
    return obj.map(item => deepCopy(item))
  }

  const newObj = {}
  for (let key in obj) {
    if (!hasOwn(obj, key)) {
      continue
    }
    newObj[key] = deepCopy(obj[key])
  }
  return newObj
}

export default deepCopy
