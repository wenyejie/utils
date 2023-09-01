import isFunction from './isFunction'
import arrDelItemByProp from './arrDelItemByProp'

// 发布订阅的订阅选项
export interface PublishSubscribeOnOptions {
  immediate?: boolean
  once?: boolean
}

// 发布订阅回调Map队列
export interface PublishSubscribeCallbackMapQueue {
  once?: boolean
  callback: AnyFn
}

//发布订阅的回调Map子项
export interface PublishSubscribeCallbackMapItem {
  data?: any
  queue: PublishSubscribeCallbackMapQueue[]
}

// 发布订阅的回调Map
export interface PublishSubscribeCallbackMap {
  [key: string]: PublishSubscribeCallbackMapItem
}

export class PublishSubscribe {
  private readonly callbackMap: PublishSubscribeCallbackMap = {}

  /**
   * 触发订阅
   * @param eventName 事件名称
   * @param data 数据
   */
  trigger(eventName: string, data?: any[]) {
    if (!eventName) {
      return
    }
    const item = this.callbackMap[eventName] ?? { queue: [] }
    const { queue } = item
    item.data = data
    // 没有订阅
    if (queue.length === 0) {
      this.callbackMap[eventName] = item
      return
    }
    queue.forEach(({ callback }) => callback(data))
    item.queue = queue.filter(({ once }) => !once)
    this.callbackMap[eventName] = item
  }

  /**
   * 订阅事件
   * @param eventName 事件名称
   * @param callback 回调
   * @param options 选项
   */
  on(eventName: string, callback: AnyFn, options?: PublishSubscribeOnOptions) {
    if (!eventName || !isFunction(callback())) {
      return
    }
    const item = this.callbackMap[eventName] ?? { queue: [] }
    const { data, queue } = item
    if (options?.immediate) {
      callback(data)
    }
    queue.push({
      once: options?.once ?? false,
      callback,
    })
    this.callbackMap[eventName] = item
  }

  /**
   * 移除订阅/频道
   * @param eventName 事件名称
   * @param callback 回调
   */
  off(eventName: string, callback?: AnyFn) {
    // 参数为空
    if (!eventName) {
      return
    }
    const item = this.callbackMap[eventName]

    // 不存在该订阅
    if (!item) {
      return
    }
    const { queue } = item
    if (isFunction(callback)) {
      arrDelItemByProp(queue, { callback })
    } else {
      delete this.callbackMap[eventName]
    }
  }

  static create() {
    return new PublishSubscribe()
  }
}

export default PublishSubscribe
