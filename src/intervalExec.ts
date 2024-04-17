import { globalThis } from './globalThis'
import { isPromise } from './isPromise'
import { normalizeOptions } from './normalizeOptions'

export interface IntervalExecOptions {
  timeout: number // 轮询时间 默认300
  immediate: boolean // 是否立即执行 默认true
  rtnVal: any; // 默认返回值, 当promise执行catch的时候
  abort: number // 停止循环的执行次数
}

interface IntervalExecResolvers<T> {
  resolve: (value?: T) => void;
  promise: Promise<T>;
}

export type IntervalExecLikeOptions = number | boolean | IntervalExecOptions

const DEFAULT_OPTIONS = {
  timeout: 300,
  immediate: true,
  rtnVal: null,
  abort: -1
}

const intervalExecTypes = {
  'number': 'timeout',
  'boolean': 'immediate',
}


/**
 * 一个辅助函数，用于以指定的时间间隔重复执行回调，直到满足特定条件。
 * @param execute { Function } 回调
 * @param options { IntervalExecLikeOptions } 选项
 */
export const intervalExec: {
  /**
   * @param execute 回调
   */<T>(execute: (...args: any[]) => T): () => Promise<T>
  /**
   * @param execute 回调
   * @param timeout 轮询时间
   */<T>(execute: (...args: any[]) => T, timeout: number): () => Promise<T>
  /**
   * @param execute 回调
   * @param immediate 是否立即执行一次
   */<T>(execute: (...args: any[]) => T, immediate: boolean): () => Promise<T>
  /**
   * @param execute 执行
   * @param options 选项
   */<T>(execute: (...args: any[]) => T, options: IntervalExecOptions): () => Promise<T>
} = <T>(execute: (...args: any[]) => T, options?: IntervalExecLikeOptions): () => Promise<T> => {
  const { timeout, immediate, rtnVal, abort } = normalizeOptions(options, intervalExecTypes, DEFAULT_OPTIONS)
  return (...args) => {
    const { resolve, promise }: IntervalExecResolvers<T> = Promise.withResolvers()
    let innerAbort = abort
    let timer = 0
    const intervalExecLoop = async () => {
      if (innerAbort >= 0) {
        if (innerAbort > 0) {
          innerAbort--
        } else {
          clearInterval(timer)
          resolve(rtnVal)
          return
        }
      }
      let result = execute(...args)
      if (isPromise(result)) {
        try {
          result = await result
        } catch (error) {
          console.error('intervalExec promise error', error)
          result = rtnVal
        }
      }
      if (result) {
        clearInterval(timer)
        resolve(result)
      }
    }
    timer = globalThis.setInterval(intervalExecLoop, timeout)
    if (immediate) {
      intervalExecLoop()
    }
    return promise
  }
}

