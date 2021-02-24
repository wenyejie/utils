declare namespace Wenyejie {
  /**
   * 移除相关属性, 包括数组和对象
   * @param data 移除队形
   * @param rest 移除的属性
   */

  export function ban<T>(data: T, ...rest: string[]): T

  /**
   * 银行卡格式化
   * @param card 银行卡号码
   */
  export function bankCardFormat(card: any): string

  /**
   * base64 to file
   * @param base64
   * @param filename 文件名称
   */
  export function base642file(base64: string, filename: string): File

  /**
   * 根据输入参数缓存执行结果
   * @param fn 执行方法
   */
  export function cached(fn: Function): Function

  /**
   * 缓存一个执行结果
   * @param fn 执行方法
   */
  export function cachedOne(fn: Function): Function

  /**
   * 把横杠命名转化为驼峰命名
   * @param str
   */
  export function camelize(str: string): string

  /**
   * 首字母大写
   * @param str
   */
  export function capitalize(str: string): string

  /**
   * 缓存请求
   */
  export namespace CatchRequest {}

  /**
   * 检查身份整号码是否正确, 即是否符合尾号码的验证规则
   * @param id
   */
  export function checkIDNO(id: string): boolean

  /**
   * 检测纳税人识别号是否正确
   * @param taxId
   */
  export function checkTaxpayerIDNO(taxId: string): boolean

  /**
   * 克隆一个对象
   * @param obj
   * @param deep
   * @param weakMap
   */
  export function clone<T>(obj: T, deep?: boolean, weakMap?: Map<any, any>): T

  export namespace Countdown {}

  /**
   * 读取css属性
   * @param elt 元素
   * @param name 属性名称
   * @param pseudoElt 是否为伪元素
   */
  export function getCSS(
    elt: Element,
    name?: string,
    pseudoElt?: string | null
  ): CSSStyleDeclaration | string | null

  /**
   * 设置css属性
   * @param elt
   * @param name
   * @param value
   */
  export function setCSS(
    elt: Element,
    name: string | CSSStyleDeclaration,
    value?: string | number | null
  ): void

  /**
   * 判断是否支持CSS属性和值
   * @param name
   * @param value
   * @param tagName
   */
  export function supportCSS(
    name: string,
    value?: string | number | null,
    tagName?: string
  ): boolean
}
