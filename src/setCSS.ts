import isString from '@/isString'
import isObject from '@/isObject'
import camelize from '@/camelize'

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
    styles[<string>prop] = value
  } else if (isObject(prop)) {
    styles = <Record<string, any>>prop
  }

  for (const key in styles) {
    elt.style[camelize(key)] = styles[key]
  }
}

export default setCSS
