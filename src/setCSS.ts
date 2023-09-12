import camelize from '@/camelize'

export const setCSS: {
  /**
   * 设置CSS属性
   * @param elt 元素
   * @param props 属性对象
   */
  (elt: HTMLElement, props: Record<string, unknown>): void
  /**
   * 设置元素属性/值
   * @param elt 元素
   * @param cssText 样式规则
   */
  (elt: HTMLElement, cssText: string): void
  /**
   * 设置元素属性/值
   * @param elt 元素
   * @param prop 属性
   * @param value 值
   */
  (elt: HTMLElement, prop: string, value: unknown): void
} = (elt: HTMLElement, prop?: string | Record<string, unknown>, value?: unknown) => {
  let styles: Record<string, unknown> = {}
  if (typeof prop === 'string') {
    if (value === undefined && prop.includes(':')) {
      elt.style.cssText = prop
      return
    }
    styles[prop] = value
  } else {
    styles = prop
  }

  for (const key in styles) {
    elt.style[camelize(key)] = styles[key]
  }
}

export default setCSS
