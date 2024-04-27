import { isPromise } from './isPromise'
import { normalizeOptions } from './normalizeOptions'

export interface IRetryIncorrectOptions {
  retry: number; // 重试次数
  base: number; // 底数
  rtnVal: any; // 重试retry次数之后返回的失败值
  check: (result: any) => any; // 检查数据是否是自己需要的数据
}

export type LikeRetryIncorrectOptions =
  undefined
  | IRetryIncorrectOptions['retry']
  | IRetryIncorrectOptions['check']
  | Partial<IRetryIncorrectOptions>;

const RETRY_INCORRECT_DEFAULT_OPTIONS: IRetryIncorrectOptions = {
  retry: 5, // 重试次数
  base: 2,
  rtnVal: null,
  check: (result) => {
    if (result?.error) {
      return false
    }
    return result
  }
}

const RETRY_INCORRECT_TYPES = {
  'number': 'retry',
  'function': 'check'
}

/**
 * 当返回错误/不是想要的数据的时候进行重试
 * @param execute 执行函数
 * @param options 选项
 */
export const retryIncorrect = <T>(execute: (...args: any[]) => T, options?: LikeRetryIncorrectOptions) => {
  const {
    retry,
    base,
    rtnVal,
    check
  } = normalizeOptions(options, RETRY_INCORRECT_TYPES, RETRY_INCORRECT_DEFAULT_OPTIONS)
  const { resolve, promise } = Promise.withResolvers<T>()
  let timer = 0
  let retryCount = 0 // 重试次数
  let timeout = 0 // 超时时间
  const retryIncorrectLoop = async () => {
    let result: null | T = execute()

    if (isPromise(result)) {
      try {
        result = await result
      } catch (error) {
        console.error('retryIncorrect promise error', error)
        result = rtnVal
      }
    }
    if (check(result) || retryCount >= retry) {
      clearTimeout(timer)
      resolve(result)
    } else {
      timeout = Math.pow(base, retryCount) - .5
      setTimeout(retryIncorrectLoop, timeout * 1000)
      retryCount++
    }
  }
  retryIncorrectLoop()
  return promise
}
