import camelize from './camelize'
import hyphenate from './hyphenate'
import isString from './isString'
import isJson from './isJson'
import globalThis from './globalThis'

export const getCSS: {
  /**
   * 读取所有的css属性
   * @param elt 元素
   * @param pseudoElt 伪元素 'before' | 'after'
   */
  (elt: HTMLElement, pseudoElt?: 'before' | 'after' | null): CSSStyleDeclaration,
  /**
   * 读取css属性
   * @param elt 元素
   * @param prop 属性名称
   * @param pseudoElt 伪元素 'before' | 'after'
   */
  (elt: HTMLElement, prop: string, pseudoElt?: 'before' | 'after' | null): any
} = (elt: HTMLElement, prop?: string, pseudoElt?: 'before' | 'after' | null) => {
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
} = (elt: HTMLElement, prop?: string | Record<string, any>, value?: any) => {
  let styles: Record<string, any> = {}
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
export const supportCSS: SupportCSS = (prop: string, value?: any) => {
  return globalThis.CSS?.supports?.(hyphenate(prop), value)
}

export default {
  get: getCSS,
  set: setCSS,
  support: supportCSS
}
