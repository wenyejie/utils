import camelize from './camelize'
import hyphenate from './hyphenate'
import isElement from './isElement'
import isString from './isString'
import isJson from './isJson'
import globalThis from './globalThis'

const ELEMENT_ERROR_MESSAGE = '请传入正确的参数elt: HTMLElement'

/**
 * 读取css属性
 * @param elt 元素
 * @param name 属性名称
 * @param pseudo 伪元素 'before' | 'after'
 */
export const getCSS = (elt:HTMLElement, name?:string, pseudo?: 'before' | 'after') => {
  if (!isElement(elt)) {
    throw new Error(ELEMENT_ERROR_MESSAGE)
  }
  if (!isString(name)) {
    return document.defaultView.getComputedStyle(elt, pseudo)
  }

  return document.defaultView.getComputedStyle(elt, pseudo)[camelize(name)]
}

/**
 * 设置css属性
 * @param elt 元素
 * @param name 属性名称
 * @param value 属性值
 */
export const setCSS = (elt:HTMLElement, name?:string | Record<string, any>, value?: any) => {
  if (!isElement(elt)) {
    throw new Error(ELEMENT_ERROR_MESSAGE)
  }
  let styles = {}
  if (isString(name)) {
    styles[camelize(name as string)] = value
  } else if (isJson(name)) {
    styles = name
  }

  for (const key in styles) {
    elt.style[key] = styles[key]
  }
}

/**
 * 判断是否支持CSS属性
 * @param name
 * @param value
 * @param tagName
 */
export const supportCSS = (name:string, value:any, tagName = 'div') => {
  if (globalThis.CSS && globalThis.CSS.supports) {
    return globalThis.CSS.supports(hyphenate(name), value)
  }

  const $el = document.createElement(tagName)

  if (name in $el.style) {
    if (value === undefined) {
      return true
    }

    $el.style[camelize(name)] = value
    return $el.style[camelize(name)] === value
  }
  return false
}

export default {
  get: getCSS,
  set: setCSS,
  support: supportCSS
}
