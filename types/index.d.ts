type anyFunction = (...args: any[]) => void

type definedProp = number | string | Date | Array<any> | RegExp | Function | Object

type linkDateType = Date | number | string

interface AnyObject {
  [propName: string]: any
}

interface MonthRange {
  start: Date | null
  end: Date | null
}

interface DateObj {
  year?: number
  month?: number
  day?: number
  week?: number
  hour?: number
  minute?: number
  second?: number
  millisecond?: number
  time?: number
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
  export namespace CatchRequest {
  }

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
  export function clone<T>(obj: T, deep?: boolean, weakMap?: WeakMap<any, any>): T

  export namespace Countdown {
  }

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
   * @param defaultValue 默认值
   */
  export function dateFormat(date: linkDateType, format: string, defaultValue?: string): string

  /**
   * 函数防抖 - 当一定时间之后没有重新调用则执行, 电梯
   * @param fn
   * @param interval 时间间隔
   * @param isFirst 第一次是否立即执行
   */
  export function debounce(fn: anyFunction, interval: number, isFirst: boolean)

  /**
   * 下载blob文件
   * 主要用于下载非同源的文件, 采用XMLHttpRequest blob下载方式下载下来或者下载canvas中的图像
   * @param blob
   * @param filename
   */
  export function downloadBlob(blob: Blob, filename?: string): void

  /**
   * 通过url下载
   * PS: 只能下载同源的链接, 如果不是同源的文件请使用downloadBlob方法
   * @param url
   * @param filename
   */
  export function downloadFile(url: string, filename?: string): void

  /**
   * 遍历数组或对象
   * @param data 数据
   * @param fn 回调函数
   */
  export function each(data: AnyObject | any[], fn: anyFunction): void

  // 被冻结的对象
  export const emptyObject: Readonly<Object>

  // 判断是否在浏览器中
  export function inBrowser(): boolean

  // 判断是否在NODE环境
  export function inNode(): boolean

  // 返回小写的ua
  export function useragent(): string

  // 是否android
  export function isAndroid(): boolean

  export function isEdge(): boolean

  export function isChrome(): boolean

  export function isFirefox(): boolean

  export function isIE(): boolean

  export function isIE9(): boolean

  export function isIOS(): boolean

  export function isIPad(): boolean

  export function isIPhone(): boolean

  export function isMobile(): boolean

  export function isPC(): boolean

  export function isPhantom(): boolean

  export function isWeChat(): boolean

  export function isWindows(): boolean

  export function isMac(): boolean

  export function isUbuntu(): boolean

  export function isLinux(): boolean

  // 加法
  export function add(x: number | string, y: number | string): number

  // 减法
  export function subtract(x: number | string, y: number | string): number

  // 乘法
  export function multiply(x: number | string, y: number | string): number

  // 除法
  export function divide(x: number | string, y: number | string): number

  /**
   * 把文件转换成base64
   * @param file
   */
  export function file2base64(file: File): string

  /**
   * 获取月份的起始范围
   * @param date 日期
   * @param type 类型
   */
  export function monthRange(date: linkDateType, type?: string): MonthRange | Date | null

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
  export function padStart(string: string | number | undefined | null, maxLength: number, fillString: string): string

  /**
   * 后置填充
   * @param string 被填充内容
   * @param maxLength 填充之后总长度
   * @param fillString 填充的字符串
   */
  export function padEnd(string: string | number | undefined | null, maxLength: number, fillString: string): string

  /**
   * 获取日期对象
   * @param date
   */
  export function dateObj(date: linkDateType): DateObj

  // 百分比格式化选项
  interface PercentageOptions {
    fractionDigits?: number, // 保留小数位
    padEnd?: boolean, // 是否需要后续补零
    defaultValue?: string, // 默认值, 即当输入值无法被转化时显示的值
    onePercent?: number, // 百分之一的数值, 0.01 * 100 = 1, 1 * 100 = 100
    symbol?: string, // 百分比符号
  }

  /**
   * 格式化百分比
   * @param value 数值
   * @param options 选项
   */
  export function percentage(value: number | string, options?: PercentageOptions)

  interface DatetimeSpanOptions {
    hasYear?: boolean,
    year?: number,
    hasMonth?: boolean,
    month?: number,
    hasDay?: boolean,
    day?: number,
    hasHour?: boolean,
    hour?: number,
    hasMinute?: boolean,
    minute?: number,
    hasSecond?: boolean,
    second?: number,
    hasMillisecond?: boolean,
    millisecond?: number,
    defaultValue?: string
  }

  interface DatetimeSpanResult {
    year?: number,
    month?: number,
    day?: number,
    hour?: number,
    minute?: number,
    second?: number,
    millisecond?: number
  }

  /**
   * 获取时间的剩余年月日时分秒
   * @param date 时间或者时间戳
   * @param options 选项
   */
  export function datetimeSpan(date: number | string | Date, options?: DatetimeSpanOptions): DatetimeSpanResult

  /**
   * 防抖函数
   * @param fn 执行函数
   * @param interval 时间间隔
   * @param isFirst 是否第一次即立即执行
   */
  export function debounce(fn: Function, interval: number, isFirst: boolean): Function

  /**
   * 获取小数点的长度
   * @param number
   */
  export function decimalLength(number: number): number

  /**
   * 下载blob文件
   * @param blob
   * @param filename
   */
  export function downloadBlob(blob: Blob, filename?: string): File

  /**
   * 下载链接
   * @param url
   * @param filename 文件名称
   */
  export function downloadFile(url, filename?: string): void

  /**
   * 遍历循环
   * @param data
   * @param fn
   */
  export function each(data: any[] | AnyObject, fn: Function): void

  // 精确计算数字
  type exactMathNum = number | string

  // 精确计算执行函数
  type exactMathFn = (num1: exactMathNum, num2: exactMathNum) => number

  // 精确计算多参数执行函数
  type exactMathMultiFn = (...nums: exactMathNum[]) => number

  // 加
  export type add = exactMathFn
  // 累加
  export type multiAdd = exactMathMultiFn
  // 减
  export type subtract = exactMathFn
  // 累减
  export type multiSubtract = exactMathMultiFn
  // 乘
  export type multiply = exactMathFn
  // 累乘
  export type multiMultiply = exactMathMultiFn
  // 除
  export type divide = exactMathFn
  // 累除
  export type multiDivide = exactMathMultiFn
  // 求余
  export type remain = exactMathMultiFn

  /**
   * 解析表达式并返回计算结果
   * @param arithmeticStr 表达式
   */
  export function exactMath(arithmeticStr: string): number

  /**
   * File转base64
   * @param file
   */
  export function file2base64(file: File): Promise<string>

  /**
   * 数据中查找子项
   * @param data
   * @param key
   * @param value
   */
  export function find<T>(data: T[], key: PropertyKey, value: any): T
  export function find<T>(data: T[], key: Object): T
  export function find<T, K>(data: { K: T }, key: K, value: any): T
  export function find<T, K>(data: { K: T }, key: Object): T

  /**
   * 查找某个子项中的具体属性
   * @param data
   * @param propValue
   * @param propKey
   * @param returnKey
   */
  export function findProps<T>(data: T[], propValue: definedProp, propKey: PropertyKey, returnKey: string): any
  export function findProps<T, K>(data: { T: K }, propValue: definedProp, propKey: PropertyKey, returnKey: string): any

  export const freezeObj: Readonly<Object>

  /**
   * 获取月份天数
   * @param date
   */
  export function getDaysByMonth(date: linkDateType): number

  // 身份证号码对象
  interface CardNumberObj {
    province: number
    city: number
    area: number
    address: number
    year: number
    day: number
    date: number
    sex: string
  }

  // 获取身份证号码中的具体信息
  export function getInfoByCardNO(cardNumber: string): CardNumberObj

  // 全局对象
  export const globalThis: Window | NodeJS.Global | undefined

  // 判断属性是不是对象本身所有
  export function hasOwn(object: Object, key: PropertyKey): boolean

  export function hasOwnProperty(v: PropertyKey): boolean

  // 驼峰命名转横杠命名
  export function hyphenate(str: string): string

  interface ImgCompressOptions {
    noCompressIfLarger?: boolean
    maxWidth?: number
    maxHeight?: number
    fillStyle?: string
    quality?: number
  }

  // 图片压缩
  export const imgCompress: (file: File, options?: ImgCompressOptions) => Promise<File>

  type typeJudge = (obj: any) => boolean

  export const isArray: typeJudge
  export const isBigint: typeJudge
  export const isBlob: typeJudge
  export const isBoolean: typeJudge
  export const isComment: typeJudge
  export const isDate: typeJudge
  export const isDefined: typeJudge
  export const isElement: typeJudge
  export const isEmptyValue: typeJudge
  export const isEvenNumber: typeJudge
  export const isFunction: typeJudge
  export const isInteger: typeJudge
  export const isJson: typeJudge
  export const isJsonString: typeJudge
  export const isMap: typeJudge
  export const isNaturalNumber: typeJudge
  export const isNumber: typeJudge
  export const isObject: typeJudge
  export const isOddNumber: typeJudge
  export const isPlainDate: typeJudge
  export const isPlainNumber: typeJudge
  export const isPlainObject: typeJudge
  export const isPlainString: typeJudge
  export const isPositiveInteger: typeJudge
  export const isPrimitive: typeJudge
  export const isPromise: typeJudge
  export const isRegExp: typeJudge
  export const isSet: typeJudge
  export const isString: typeJudge
  export const isSymbol: typeJudge
  export const isText: typeJudge
  export const isUndefined: typeJudge
  export const isWeakMap: typeJudge
  export const isWeakSet: typeJudge

  // 判断两个日期是否为同一天
  export const isSameDay: (date1: linkDateType, date2?: linkDateType) => boolean

  // 判断是否为同域
  export const isSameHost: (urlA: string, urlB?: string) => boolean

  // 判断是否同一个月
  export const isSameMonth: (urlA: linkDateType, urlB?: linkDateType) => boolean

  // 判断是否同一年
  export const isSameYear: (urlA: linkDateType, urlB?: linkDateType) => boolean

  export const isSupportWebp: () => Promise<void>

  interface LoadOptions {
    before: Function
    mode: string
    attrs: AnyObject
  }

  // 加载资源
  export const load: (tagName: string, url: string, options?: LoadOptions) => Promise<HTMLElement>

  // 手机号码格式化
  export const mobilePhoneFormat: (number: string) => string

  // 金钱转中文大写
  export const money2cn: (n: string | number) => string

  // 空函数
  export function noop(): void

  // 没有原型链的空对象
  export const nullProtoObject: () => Object

  // 获取对象的属性个数
  export const objectLength: (obj: AnyObject) => number

  export const objectToString: () => string

  // 缓存执行结果, 让函数只执行一次
  export const once: (fn: Function) => Function

  // 手机号码格式化
  export const phoneNumFormat: (phone: string) => string

  // 从对象中选取一些属性, 返回一个新对象
  export const pick: (data: Object, ...reset: PropertyKey[]) => Object

  // 获取前缀
  export const prefix: (string: string) => string

  // 随机整数
  export const randomInteger: (max: number, min?: number) => number

  // 随机数
  export const randomNumber: (max, min?: number) => number

  export const rMobilePhone: RegExp
  export const rTelephone: RegExp
  export const rPhone: RegExp
  export const rIDCardNO: RegExp
  export const rBankCardNO: RegExp
  export const rChinese: RegExp
  export const rChineseName: RegExp
  export const rEmail: RegExp
  export const rUrl: RegExp
  export const rEmoji: RegExp
  export const rPostcode: RegExp
  export const rAmount: RegExp

  // 根据属性移除子项
  export function removeItemByProp<T>(data: T[], key: string, value: definedProp): T[]
  export function removeItemByProp<T>(data: T[], key: AnyObject): T[]

  // 移除数组中的值
  export const removeVal: <T>(array: T[], value: definedProp) => T[]

  // 批量已移除数组中的值
  export const remove: <T>(array, ...values: any[]) => T[]

  // 移除字符串中的空格
  export const removeSpace: (string: string) => string

  // 加载script
  export const script: (url: string, options?: LoadOptions) => Promise<HTMLScriptElement>

  /**
   * 模仿Array.prototype.splice方法
   * @param string
   * @param start
   * @param deleteCount
   * @param insertString
   */
  export function spliceString(string: string, start: number, deleteCount: number | string, insertString: string): string

  // session
  export function session (name: string): any
  export function session (name: string, value: any): void

  // local
  export function local (name: string): any
  export function local (name: string, value: any): void

  export const suffix: (string: string) => string

  export const swap: (obj: Object, i: PropertyKey, j: PropertyKey) => Object

  // 节流函数
  export const throttle: (fn:Function, interval?: number, isFirst?: boolean) => Function

  // 转换为date类型
  export const toDate: (date: any) => Date | undefined

  // to number
  export const toNumber: (num: number | string, defaultValue?: number) => number

  export const toRawType: (obj: any) => string

  export const toTypeString: (obj: any) => string

  export const unique: <T>(array: T[]) => T[]

  export const url2http: (url: string) => string
  export const url2https: (url: string) => string
}
