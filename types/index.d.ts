/**
 * 移除相关属性, 包括数组和对象
 * @param data 移除队形
 * @param rest 移除的属性
 */

export declare function ban<T>(data: T, ...rest: string[]): T

/**
 * 银行卡格式化
 * @param card 银行卡号码
 */
export declare function bankCardFormat(card: any): string

/**
 * base64 to file
 * @param base64
 * @param filename 文件名称
 */
export declare function base642file(base64: string, filename: string): File

/**
 * 根据输入参数缓存执行结果
 * @param fn 执行方法
 */
export declare function cached(fn: Function): Function

/**
 * 缓存一个执行结果
 * @param fn 执行方法
 */
export declare function cachedOne(fn: Function): Function

/**
 * 把横杠命名转化为驼峰命名
 * @param str
 */
export declare function camelize(str: string): string

/**
 * 首字母大写
 * @param str
 */
export declare function capitalize(str: string): string

/**
 * 缓存请求
 */
export declare namespace CatchRequest {}

/**
 * 检查身份整号码是否正确, 即是否符合尾号码的验证规则
 * @param id
 */
export declare function checkIDNO(id: string): boolean
