import { ToRawType } from '@/toRawType'

export type PropObj = Record<string, unknown>

export type LikeDate = Date | string | number

// 任意函数
export type AnyFn = (...rest: unknown[]) => unknown

// 是对象的其中几个
export type valueOf<T> = T[keyof T]

// 是对象的其中几个值的类型或者对象中的其中几个属性
export type PartialValueOf<T> = Partial<T> | valueOf<T>

export type PartialToRawTypeKeyof<T> = Partial<Record<ToRawType, keyof T>>

