/**
 * @author: Storm
 * @date: 2021/01/18
 * @email: wenyejie@foxmail.com
 */

export var globalThis =
  globalThis ||
  (() => {
    if (typeof self !== 'undefined') {
      return self
    }
    if (typeof window !== 'undefined') {
      return window
    }
    if (typeof global !== 'undefined') {
      return global
    }
    throw new Error('unable to locate global object')
  })()

export default globalThis
