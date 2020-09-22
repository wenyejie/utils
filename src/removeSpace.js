import isString from './isString.js'
const rSpace = /\s+/g

const removeSpace = string => {
  if (!isString(string)) {
    return ''
  }
  return string.replace(rSpace, '')
}

export default removeSpace
