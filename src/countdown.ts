import { globalThis } from './globalThis'
import { isFunction } from './isFunction'
import { isObject } from './isObject'
import { PublishSubscribe } from './publishSubscribe'
import { noop } from './noop'

// 倒计时回调
export type CountdownCallback = (timestamp: number) => void

// 倒计时选项
export interface CountdownOptions {
  immediate?: boolean // 立即返回渲染
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
  // 回调
  change?: CountdownCallback
}

const DEFAULT_OPTIONS: CountdownOptions = {
  value: 0,
  change: noop,
  immediate: true,
  delay: 1000,
  decrement: 1,
  autostart: true,
  end: 0
}

class Countdown extends PublishSubscribe {
  // 倒计时的值
  private value = 0
  // 倒计时计时器ID
  private intervalId = 0
  // 选项
  private readonly options: CountdownOptions

  constructor(options: CountdownOptions) {
    super()
    if (isFunction(options.change)) {
      this.on('change', options.change)
    }
    this.options = Object.assign({ ...DEFAULT_OPTIONS }, options)
    this.value = this.options.value
    if (this.options.autostart) {
      this.start()
    }
  }

  /**
   * 创建倒计时实例
   * @param timer 倒计时
   * @param callback 回调
   */
  static create(timer: number, callback: CountdownCallback): Countdown
  /**
   * 创建倒计时实例
   * @param options 选项
   */
  static create(options: CountdownOptions): Countdown
  /**
   * 创建倒计时实例
   * @param timer 倒计时
   * @param options 选项
   */
  static create(timer: number, options: CountdownOptions): Countdown
  static create(timer: number | CountdownOptions, options?: CountdownOptions | CountdownCallback) {
    const innerOptions: CountdownOptions = {}
    if (typeof timer === 'number') {
      innerOptions.value = timer
    } else if (isObject(timer)) {
      Object.assign(innerOptions, timer)
    }
    if (isFunction(options)) {
      innerOptions.change = <CountdownOptions['change']>options
    } else if (isObject(options)) {
      Object.assign(innerOptions, <CountdownOptions>options)
    }
    return new Countdown(innerOptions)
  }

  // 开始
  start() {
    if (this.options.value > this.value) {
      return
    }
    this.loop()
    this.emit('start')
    if (this.options.immediate) {
      this.emit('change')
    }
  }

  // 停止
  stop() {
    if (this.intervalId === 0) {
      return
    }
    this.clear()
    this.emit('stop')
  }

  // 继续
  continue() {
    if (this.intervalId !== 0) {
      return
    }
    this.loop()
    this.emit('continue')
  }

  // 倒计时
  private decrease() {
    this.value = this.value - this.options.decrement
    if (this.value <= this.options.end) {
      clearInterval(this.intervalId)
      this.emit('finish')
    }
    this.emit('change')
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
}

export const countdown = Countdown.create

