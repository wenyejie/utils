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

// 发布订阅的订阅选项
interface PublishSubscribeOnOptions {
  immediate?: boolean
  once?: boolean
}

// 发布订阅回调Map队列
interface PublishSubscribeCallbackMapQueue {
  once?: boolean
  callback: AnyFn
}

//发布订阅的回调Map子项
interface PublishSubscribeCallbackMapItem {
  data?: any
  queue: PublishSubscribeCallbackMapQueue[]
}

// 发布订阅的回调Map
interface PublishSubscribeCallbackMap {
  [key: string]: PublishSubscribeCallbackMapItem
}

// 日期对象返回结果
interface DateObjResult {
  year?: number
  month?: number
  day?: number
  week?: number
  hour?: number
  minute?: number
  second?: number
  millisecond?: number
  time?: number
}
