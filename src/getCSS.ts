import isString from '@/isString'
import camelize from '@/camelize'

export const getCSS: {
  /**
   * 读取所有的css属性
   * @param elt 元素
   * @param pseudoElt 伪元素 'before' | 'after'
   */
  (elt: HTMLElement, pseudoElt?: 'before' | 'after' | null): CSSStyleDeclaration
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

export default getCSS
