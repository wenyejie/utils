import camelize from './camelize'
import isElement from './isElement'
import isString from './isString'
import isUndefined from './isUndefined'
import isJson from './isJson'

const ELEMENT_ERROR_MESSAGE = '请传入正确的参数elt: HTMLElement'

/**
 * 读取css属性
 * @param elt 元素
 * @param name 属性名称
 * @param pseudo 伪元素 'before' | 'after'
 */
export const getCSS = (elt: HTMLElement, name: any, pseudo: string) => {
  if (!isElement(elt)) {
    throw new Error(ELEMENT_ERROR_MESSAGE)
  }
  if (!isString(name)) {
    return document.defaultView.getComputedStyle(elt, pseudo)
  }
  // @ts-ignore
  return document.defaultView.getComputedStyle(elt, pseudo)[camelize(name)]
}

/**
 * 设置css属性
 * @param elt 元素
 * @param name 属性名称
 * @param value 属性值
 */
export const setCSS = (elt: HTMLElement, name: any, value: any) => {
  if (!isElement(elt)) {
    throw new Error(ELEMENT_ERROR_MESSAGE)
  }
  let styles: Record<any, any> = {}
  if (isString(name)) {
    styles[camelize(name)] = value
  } else if (isJson(name)) {
    styles = name
  }

  for (let key in styles) {
    // @ts-ignore
    elt.style[key] = styles[key]
  }
}

/**
 * 判断是否支持CSS属性
 * @param name
 * @param value
 * @param tagName
 */
export const supportCSS = (name: any, value: any, tagName = 'div') => {
  if (window.CSS && window.CSS.supports) {
    if (isUndefined(value)) {
      return window.CSS.supports(name)
    }
  }

  const $el = document.createElement(tagName)

  if (name in $el.style) {
    $el.style[name] = value
    return $el.style[name] === value
  }
  return false
}

export default {
  get: getCSS,
  set: setCSS,
  support: supportCSS
}
