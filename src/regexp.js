import { toString } from './base.js'

export function isRegExp(obj) {
  return toString.call(obj) === '[object RegExp]'
}
