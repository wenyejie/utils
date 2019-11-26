import { isArray } from './common.js'

let instance

export class PubSub {
  #events = {}
  #messages = {}
  constructor() {}
  on(key, fn, offline = true) {
    if (!this.#events[key]) {
      this.#events[key] = []
    }
    this.#events[key].push(fn)
    if (!offline || !this.#messages[key]) {
      return this
    }
    this.trigger(key, ...this.#messages[key])
  }
  trigger(key, ...rest) {
    this.#messages[key] = rest
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
}

instance = new PubSub()

const PubSubProxy = function(...rest) {
  if (this instanceof PubSub) {
    return new PubSub(...rest)
  }
  return instance
}

PubSubProxy.create = function(...rest) {
  return new PubSub(...rest)
}

PubSubProxy.prototype = PubSub.prototype

export default PubSubProxy
