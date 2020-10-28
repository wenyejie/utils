import isFunction from './isFunction.js'

const defaultOptions = {
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
class Countdown {
  constructor(second, options) {
    this.second = second
    this.count = 0
    if (isFunction(options)) {
      options = { change: options }
    }

    this.options = Object.assign({ ...defaultOptions }, options)

    if (this.options.autostart) {
      this.start()
    }
  }

  callback(cbName) {
    if (isFunction(this.options[cbName])) {
      const count = this.options.padStart ? `${this.count}`.padStart(2, '0') : `${this.count}`
      this.options[cbName](count, this)
    }
  }

  loop() {
    this.callback('change')
    this.timer = setInterval(() => {
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

  static create(second, options) {
    return new Countdown(second, options)
  }
}

export const countdown = Countdown.create

export default countdown
