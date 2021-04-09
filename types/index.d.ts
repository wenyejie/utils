type anyFunction = (...args: any[]) => void

interface AnyObject {
  [propName: string]: any
}

interface MonthRange {
  start: Date | null
  end: Date | null
}

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
  export function cached(fn: anyFunction): Function

  /**
   * 缓存一个执行结果
   * @param fn 执行方法
   */
  export function cachedOne(fn: anyFunction): Function

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

  /**
   * 把相关数据转换成
   * @param date 日期
   * @param format 格式
   */
  export function dateFormat(date: any, format: string): string

  /**
   * 函数防抖 - 当一定时间之后没有重新调用则执行, 电梯
   * @param fn
   * @param interval 时间间隔
   * @param isFirst 第一次是否立即执行
   */
  export function debounce(fn:anyFunction, interval: number, isFirst:boolean)

  /**
   * 下载blob文件
   * 主要用于下载非同源的文件, 采用XMLHttpRequest blob下载方式下载下来或者下载canvas中的图像
   * @param blob
   * @param filename
   */
  export function downloadBlob(blob:Blob, filename?: string): void

  /**
   * 通过url下载
   * PS: 只能下载同源的链接, 如果不是同源的文件请使用downloadBlob方法
   * @param url
   * @param filename
   */
  export function downloadFile(url: string, filename?: string):void

  /**
   * 遍历数组或对象
   * @param data 数据
   * @param fn 回调函数
   */
  export function each(data: AnyObject | any[], fn: anyFunction): void

  // 被冻结的对象
  export const emptyObject:AnyObject

  // 判断是否在浏览器中
  export function inBrowser():boolean

  // 判断是否在NODE环境
  export function inNode(): boolean

  // 返回小写的ua
  export function useragent(): string

  // 是否android
  export function isAndroid(): boolean

  export function isEdge(): boolean

  export function isChrome(): boolean

  export function isFirefox():boolean

  export function isIE():boolean

  export function isIE9():boolean

  export function isIOS():boolean

  export function isIPad():boolean

  export function isIPhone():boolean

  export function isMobile():boolean

  export function isPC():boolean

  export function isPhantom():boolean

  export function isWeChat():boolean

  export function isWindows():boolean

  export function isMac():boolean

  export function isUbuntu():boolean

  export function isLinux():boolean

  // 加法
  export function add(x:number | string, y:number | string):number

  // 减法
  export function subtract(x:number | string, y:number | string):number

  // 乘法
  export function multiply(x:number | string, y:number | string):number

  // 除法
  export function divide(x:number | string, y:number | string):number

  /**
   * 把文件转换成base64
   * @param file
   */
  export function file2base64(file:File):string

  /**
   * 获取月份的起始范围
   * @param date 日期
   * @param type 类型
   */
  export function monthRange(date: Date, type?:string):MonthRange | Date | null

  /**
   * 把输入转换为css长度单位
   * @param number
   * @param defaultUnit
   */
  export function toCSSUnit(number: string | number | undefined, defaultUnit: string): string

  /**
   * 前置填充
   * @param string 被填充内容
   * @param maxLength 填充之后总长度
   * @param fillString 填充的字符串
   */
  export function padStart(string: string | number | undefined | null, maxLength: number, fillString: string)

  /**
   * 后置填充
   * @param string 被填充内容
   * @param maxLength 填充之后总长度
   * @param fillString 填充的字符串
   */
  export function padEnd(string: string | number | undefined | null, maxLength: number, fillString: string)
}
