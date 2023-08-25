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

// 倒计时时间名称
type CountdownEventName = 'change' | 'start' | 'stop' | 'finish' | 'continue'
// 倒计时回调
type CountdownCallback = (value: number) => void
// 倒计时选项
interface CountdownOptions {
  // 循环间隔时间
  delay?: number
  // 每次循环减少数
  decrement?: number
  // 实例化之后自启动
  autostart?: boolean
  // 倒计时时间
  value?: number
  // 结束的值
  end?: number
}
