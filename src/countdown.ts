import globalThis from './globalThis'
import isFunction from './isFunction'

const DEFAULT_OPTIONS: CountdownOptions = {
  delay: 1000,
  decrement: 1,
  autostart: true,
  end: 0,
}

class Countdown {
  // 倒计时的值
  private value: number
  // 倒计时计时器ID
  private intervalId: number
  // 选项
  private readonly options: CountdownOptions
  // 回调队列
  private readonly callbackQueues: Record<string, CountdownCallback[]> = {}

  constructor(value: number | CountdownOptions, options?: CountdownOptions | CountdownCallback) {
    if (isFunction(options)) {
      this.on('change', <CountdownCallback>options)
    }
    this.options = Object.assign({ ...DEFAULT_OPTIONS }, options, typeof value === 'number' ? { value } : value)
    this.value = this.options.value
    if (this.options.autostart) {
      this.start()
    }
  }

  /**
   * 监听事件
   * @param eventName 事件名称
   * @param callback // 事件回调
   */
  on(eventName: CountdownEventName, callback: CountdownCallback) {
    const queue = this.callbackQueues[eventName] ?? []
    queue.push(callback)
    this.callbackQueues[eventName] = queue
  }

  /**
   * 触发事件
   * @param eventName 事件名称
   */
  trigger(eventName: CountdownEventName) {
    const queue = this.callbackQueues[eventName]
    if (!Array.isArray(queue)) {
      return
    }
    queue.forEach((cb) => cb.call(this, this.value))
  }

  // 倒计时
  private decrease() {
    this.value = this.value - this.options.decrement
    if (this.value <= this.options.end) {
      clearInterval(this.intervalId)
      this.trigger('finish')
    }
    this.trigger('change')
  }

  // 循环
  private loop() {
    this.clear()
    this.intervalId = globalThis.setInterval(this.decrease.bind(this), this.options.delay)
  }

  // 清除倒计时
  private clear() {
    clearInterval(this.intervalId)
    this.intervalId = 0
  }

  // 开始
  start() {
    if (this.options.value > this.value) {
      return
    }
    this.loop()
    this.trigger('start')
  }

  // 停止
  stop() {
    if (this.intervalId === 0) {
      return
    }
    this.clear()
    this.trigger('stop')
  }

  // 继续
  continue() {
    if (this.intervalId !== 0) {
      return
    }
    this.loop()
    this.trigger('continue')
  }

  /**
   * 创建倒计时实例
   * @param value 倒计时
   * @param options 选项
   */
  static create(value: number, options?: CountdownOptions) {
    return new Countdown(value, options)
  }
}

export const countdown = Countdown.create

export default countdown
