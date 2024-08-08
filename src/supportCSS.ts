import { hyphenate } from './hyphenate'
import { globalThis } from './globalThis'

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
export const supportCSS: SupportCSS = (prop: string, value?: string) => {
  return globalThis?.CSS?.supports?.(hyphenate(prop), value)
}

