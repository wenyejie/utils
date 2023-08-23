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
 * @param prop 属性名称
 * @param pseudoElt 伪元素 'before' | 'after'
 */
export const getCSS:{
  (elt: HTMLElement, pseudoElt?: 'before' | 'after' | null): CSSStyleDeclaration,
  (elt: HTMLElement, prop: string, pseudoElt?: 'before' | 'after' | null): any
} = (elt:HTMLElement, prop?:string, pseudoElt?: 'before' | 'after' | null) => {
  if (!isElement(elt)) {
    console.error(ELEMENT_ERROR_MESSAGE)
    return
  }
  if (!isString(prop)) {
    return document.defaultView.getComputedStyle(elt, pseudoElt)
  }

  return document.defaultView.getComputedStyle(elt, pseudoElt)[camelize(prop)]
}


export const setCSS: {
  /**
   * 设置CSS属性
   * @param elt 元素
   * @param props 属性对象
   */
  (elt: HTMLElement, props: Record<string, any>): void
  /**
   * 设置元素属性/值
   * @param elt 元素
   * @param prop 属性
   * @param value 值
   */
  (elt: HTMLElement, prop: string, value: any): void
} = (elt:HTMLElement, prop?:string | Record<string, any>, value?: any) => {
  if (!isElement(elt)) {
    console.error(ELEMENT_ERROR_MESSAGE)
    return
  }
  let styles:Record<string, any> = {}
  if (isString(prop)) {
    styles[camelize(<string>prop)] = value
  } else if (isJson(prop)) {
    styles = <Record<string, any>>prop
  }

  for (const key in styles) {
    elt.style[key] = styles[key]
  }
}

type SupportCSS = {
  /**
   * 判断是否支持CSS条件
   * @param condition 条件
   */
  (condition: string): boolean
  /**
   * 判断是否支持CSS属性
   * @param prop 属性
   * @param value 值
   */
  (prop: string, value: string): boolean
}
export const supportCSS:SupportCSS = (prop:string, value?:any) => {
  return globalThis.CSS?.supports?.(hyphenate(prop), value)
}

export default {
  get: getCSS,
  set: setCSS,
  support: supportCSS
}
