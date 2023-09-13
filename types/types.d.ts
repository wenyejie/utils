type PropKey = string | number | symbol
type PropObj = Record<string, unknown>

type LikeDate = Date | string | number

// 任意函数
type AnyFn = (...rest: unknown[]) => unknown

type VoidFn = () => void
