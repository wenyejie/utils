import { emptyObject } from './common.js'
import { inBrowser } from './env.js'

class CustomStorage {
  constructor(name) {
    this.storage = inBrowser ? window[`${name}Storage`] : emptyObject
  }

  get(key) {
    let result
    try {
      result = (JSON.parse(this.storage.getItem(key)) || emptyObject).v
    } catch (e) {
      console.error(e)
    }
    return result
  }

  set(key, value) {
    try {
      this.storage.setItem(key, JSON.stringify({ v: value }))
    } catch (e) {
      console.error(e)
    }
  }

  remove(key) {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }

  key(index) {
    return this.storage.key(index)
  }

  length() {
    return this.storage.length
  }
}

export const local = new CustomStorage('local')

export const session = new CustomStorage('session')

export default {
  local,
  session
}
