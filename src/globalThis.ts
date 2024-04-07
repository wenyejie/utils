/**
 * 获取globalThis
 */
const getGlobalThis = (): Window & typeof globalThis => {
  if (typeof globalThis !== 'undefined') {
    return <Window & typeof globalThis>globalThis
  } else if (typeof self !== 'undefined') {
    return self
  } else if (typeof window !== 'undefined') {
    return window
  } else if (typeof global !== 'undefined') {
    return <Window & typeof globalThis>global
  } else {
    return Function('return this')()
  }
}

let gt: Window & typeof globalThis
try {
  gt = <Window & typeof globalThis>globalThis
} catch {
  gt = getGlobalThis()
}

export { gt as globalThis }

export default gt
