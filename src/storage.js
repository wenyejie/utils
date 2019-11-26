import { emptyObject } from './common.js'
import { inBrowser } from './env.js'

const storage = name => {
  const s = inBrowser ? window[`${name}Storage`] : emptyObject
  return {
    get(key) {
      let result
      try {
        result = (JSON.parse(s.getItem(key)) || emptyObject).v
      } catch (e) {
        console.error(e)
      }
      return result
    },

    set(key, value) {
      try {
        s.setItem(key, JSON.stringify({ v: value }))
      } catch (e) {
        console.error(e)
      }
    },

    remove(key) {
      s.removeItem(key)
    },

    clear() {
      s.clear()
    },

    length() {
      return s.length
    }
  }
}

export const local = storage('local')

export const session = storage('session')

export default {
  local,
  session
}
