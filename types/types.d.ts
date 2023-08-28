type PropKey = string | number | symbol
type PropObj = Record<PropKey, any>
type StorageFn = {
  (name: string): any
  (name: string, value: null): void
  (name: string, value: any): void
}
type LikeDate = Date | string | number

// 任意函数
type AnyFn = (...rest: any[]) => any
