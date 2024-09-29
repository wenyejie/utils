import { PLACEHOLDER } from './utils'

// 占位符
export const PARTIAL_PLACEHOLDER = PLACEHOLDER

/**
 * 让有多个参数的函数, 写死几个参数, 让函数调用更简单
 * @param fn 函数
 * @param partials 参数
 */
export const partial = <T>(fn: (...args: any[]) => T, ...partials: any[]) => {
  return function (...args: any[]) {
    const params = [ ...partials ];
    const paramsEntries = params.entries();
    let next: IteratorResult<[number, any], any>
    do {
      next = paramsEntries.next()
      if (next?.value?.[1] === PARTIAL_PLACEHOLDER ) {
        params[next.value[0]] = args.shift()
      }
    } while (!next.done && args.length > 0)
    return fn.apply(this, params) as T
  }
}
