export * from '../src/wenyejie'

declare global {
  export type PropKey = string | number | symbol

  export type PropObj = Record<string, unknown>

  export type LikeDate = Date | string | number

// 任意函数
  export type AnyFn = (...rest: unknown[]) => unknown

  export type VoidFn = () => void
}
