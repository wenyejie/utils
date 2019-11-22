import { isArray } from './index.js'

let instance

export class Observer {
  #events = {}
  #messages = {}
  constructor() {}
  on(key, fn, offline = true) {
    if (!this.#events[key]) {
      this.#events[key] = []
    }
    this.#events[key].push(fn)
    debugger
    if (offline) {
      this.triggerOffline(key, fn)
    }
  }
  triggerOffline(key, fn) {
    const msgs = this.#messages[key]
    if (!isArray(msgs) || msgs.length === 0) {
      return
    }
    msgs.forEach(args => fn.apply(this, args))
  }
  trigger(key, ...rest) {
    if (!this.#messages[key]) {
      this.#messages[key] = []
    }
    this.#messages[key].push(rest)
    const fns = this.#events[key]
    if (!isArray(fns) || fns.length === 0) {
      return false
    }
    fns.forEach(fn => fn.apply(this, rest))
  }

  once(key, fn, offline = true) {
    const _this = this
    const _fn = function() {
      fn.apply(this, arguments)
      _this.off(key, _fn)
    }
    this.on(key, _fn, offline)
  }

  off(key, fn) {
    const fns = this.#events[key]
    if (!isArray(fns)) {
      return
    }
    if (typeof fn !== 'function') {
      fns.splice(0, fns.length)
      return true
    }
    const fnIndex = fns.findIndex(_fn => _fn === fn)
    if (fnIndex >= 0) {
      fns.splice(fnIndex, 1)
    }
    if (fns.length === 0) {
      delete this.#events[key]
    }
    return true
  }

  static create() {
    return new Observer(arguments)
  }
}

instance = Observer.create()

export default instance
