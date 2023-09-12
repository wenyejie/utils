type PropKey = string | number | symbol
type PropObj = Record<PropKey, unknown>

type LikeDate = Date | string | number

// 任意函数
type AnyFn = (...rest: unknown[]) => unknown

type VoidFn = () => void
