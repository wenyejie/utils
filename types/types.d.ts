type PropKey = string | number | symbol
type PropObj = Record<PropKey, any>

type LikeDate = Date | string | number

// 任意函数
type AnyFn = (...rest: any[]) => any
