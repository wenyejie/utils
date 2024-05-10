/**
 * 缓存执行结果, 当结果输入相同时, 不再执行
 * @param fn 方法
 */
export const cached = <T>(fn: (...args: any[]) => T) => {
  const caches: Record<string, T> = {}
  return function(...args: any[]) {
    const argsStr = args.join(',')
    if (argsStr in caches) {
      return caches[argsStr]
    }
    caches[argsStr] = fn.apply(this, args)
    return caches[argsStr]
  }
}

