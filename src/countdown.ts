import isFunction from './isFunction'
import globalThis from './globalThis'

interface CountdownOptions {
  timeout?: number
  autostart?: boolean
  padStart?: boolean
  change?(...rest: any[]): any
  start?(...rest: any[]): any
  stop?(...rest: any[]): any
  restart?(...rest: any[]): any
  end?(...rest: any[]): any
}

const defaultOptions:CountdownOptions = {
  // 计时间隔
  timeout: 1000,
  // 是否自动开始
  autostart: true,
  // 是否前置补零
  padStart: true
}

/**
 * 倒计时
 * @param second
 * @param options
 */
export class Countdown {
  private readonly second: number
  private readonly options: CountdownOptions
  private count: number
  private timer: number
  constructor(second: number, options?:CountdownOptions | CountdownOptions['change']) {
    this.second = second
    this.count = 0
    if (isFunction(options)) {
      options = { change: options as CountdownOptions['change'] }
    }

    this.options = Object.assign({ ...defaultOptions }, options)

    if (this.options.autostart) {
      this.start()
    }
  }

  private callback(cbName: string) {
    if (isFunction(this.options[cbName])) {
      const count = this.options.padStart ? `${this.count}`.padStart(2, '0') : `${this.count}`
      this.options[cbName](count, this)
    }
  }

  loop() {
    this.callback('change')
    this.timer = globalThis.setInterval(() => {
      this.count--
      this.callback('change')
      if (this.count === 0) {
        clearInterval(this.timer)
        this.callback('end')
      }
    }, this.options.timeout)
  }

  restart() {
    this.count = this.second
    this.callback('restart')
    this.loop()
  }

  start() {
    if (this.count <= 0) {
      this.count = this.second
    }
    this.callback('start')
    this.loop()
  }

  stop() {
    clearInterval(this.timer)
    this.callback('stop')
  }

  static create(second: number, options: CountdownOptions | CountdownOptions['change']) {
    return new Countdown(second, options)
  }
}

export const countdown = Countdown.create

export default countdown
