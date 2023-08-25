type PropKey = string | number | symbol
type PropObj = Record<PropKey, any>
type StorageFn = {
  (name: string): any
  (name: string, value: null): void
  (name: string, value: any): void
}
type LikeDate = Date | string | number
