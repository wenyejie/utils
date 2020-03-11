interface EmptyObject {}

export declare const emptyObject: EmptyObject

export declare function noop(): void

export declare const nullProtoObject: EmptyObject

declare type PropertyKey = string | number | symbol

export declare function hasOwnProperty(v: PropertyKey): boolean

/**
 * 判断key值是否是对象自己的属性
 * @param object
 * @param key
 */
export declare function hasOwn(object: Object, key: string): boolean

/**
 * 判断一个值是不是空值
 * @param value
 */
export declare function isEmptyValue(value: undefined | null | string | number | any[]): boolean

export declare function objectToString(): string

export declare function toTypeString(obj: any): string

export declare function toRawType(value: any): string

export declare function isFunction(obj: any): boolean

export declare function isSymbol(obj: any): boolean

export declare function isBigint(obj: any): boolean

export declare function isBoolean(obj: any): boolean

export declare function isPrimitive(any: any): boolean

export declare function isPromise(obj: any): boolean

export declare function swap(obj: Object, i: number | string, j: number | string): void

export declare function each(data: object | any[], fn: Function): void

export declare function once(fn: Function): Function

export declare function cached(fn: Function): Function

export declare function zeroize(num: number | string, len?: number, isPrepend?: boolean): string
