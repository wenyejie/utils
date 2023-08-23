import camelize from './camelize'
import hyphenate from './hyphenate'
import isElement from './isElement'
import isString from './isString'
import isJson from './isJson'
import globalThis from './globalThis'

const ELEMENT_ERROR_MESSAGE = '请传入正确的参数elt: HTMLElement'

type GetCSS = {
  (elt: HTMLElement, pseudoElt?: 'before' | 'after'): CSSStyleDeclaration,
  (elt: HTMLElement, prop: string, pseudoElt?: 'before' | 'after'): any
}

/**
 * 读取css属性
 * @param elt 元素
 * @param prop 属性名称
 * @param pseudoElt 伪元素 'before' | 'after'
 */
export const getCSS:GetCSS = (elt:HTMLElement, prop?:string, pseudoElt?: 'before' | 'after') => {
  if (!isElement(elt)) {
    throw new Error(ELEMENT_ERROR_MESSAGE)
  }
  if (!isString(prop)) {
    return document.defaultView.getComputedStyle(elt, pseudoElt)
  }

  return document.defaultView.getComputedStyle(elt, pseudoElt)[camelize(prop)]
}

/**
 * 设置css属性
 * @param elt 元素
 * @param prop 属性名称
 * @param value 属性值
 */
export const setCSS = (elt:HTMLElement, prop?:string | Record<string, any>, value?: any) => {
  if (!isElement(elt)) {
    throw new Error(ELEMENT_ERROR_MESSAGE)
  }
  let styles = {}
  if (isString(prop)) {
    styles[camelize(prop as string)] = value
  } else if (isJson(prop)) {
    styles = prop
  }

  for (const key in styles) {
    elt.style[key] = styles[key]
  }
}

/**
 * 判断是否支持CSS属性
 * @param prop 属性
 * @param value 值
 * @param tagName 标签名称
 */
export const supportCSS = (prop:string, value:any, tagName = 'div') => {
  if (globalThis.CSS && globalThis.CSS.supports) {
    return globalThis.CSS.supports(hyphenate(prop), value)
  }

  const $el = document.createElement(tagName)

  if (prop in $el.style) {
    if (value === undefined) {
      return true
    }

    $el.style[camelize(prop)] = value
    return $el.style[camelize(prop)] === value
  }
  return false
}

export default {
  get: getCSS,
  set: setCSS,
  support: supportCSS
}
