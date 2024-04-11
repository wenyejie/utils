import { globalThis } from './globalThis'
import { isPromise } from './isPromise'

export interface IntervalExecOptions {
  // 轮询时间 默认300
  timeout?: number
  // 是否立即执行 默认true
  immediate?: boolean
}

interface IntervalExecResolvers<T> {
  resolve: (value?: T) => void;
  promise: Promise<T>;
}

export type IntervalExecLikeOptions = number | boolean | IntervalExecOptions

const DEFAULT_OPTIONS = {
  timeout: 300,
  immediate: true
}

const normalizedOptions = (options:IntervalExecLikeOptions):IntervalExecOptions => {
  if (typeof options === 'number') {
    return { ...DEFAULT_OPTIONS, timeout: options }
  }
  if (typeof options === 'boolean') {
    return { ...DEFAULT_OPTIONS, immediate: options }
  }
  return { ...DEFAULT_OPTIONS, ...options }
}

/**
 * 一个辅助函数，用于以指定的时间间隔重复执行回调，直到满足特定条件。
 * @param callback { Function } 回调
 * @param options { IntervalExecLikeOptions } 选项
 */
export const intervalExec:{
  /**
   * @param callback 回调
   */
  <T>(callback: (...args: any[]) => T): () => Promise<T>
  /**
   * @param callback 回调
   * @param timeout 轮询时间
   */
  <T>(callback: (...args: any[]) => T, timeout: number): () => Promise<T>
  /**
   * @param callback 回调
   * @param immediate 是否立即执行一次
   */
  <T>(callback: (...args: any[]) => T, immediate: boolean): () => Promise<T>
  /**
   * @param callback 回调
   * @param options 选项
   */
  <T>(callback: (...args: any[]) => T, options: IntervalExecOptions): () => Promise<T>
} = <T>(callback: (...args: any[]) => T, options:IntervalExecLikeOptions = {}): () => Promise<T> => {
  const { timeout, immediate } = normalizedOptions(options)
  return (...args) => {
    const { resolve, promise }:IntervalExecResolvers<T> = Promise.withResolvers()
    let timer = 0
    const intervalExecLoop = async (args) => {
      let result = callback(...args);
      if (isPromise(result)) {
        try {
          result = await result
        } catch (error) {
          result = null;
        }
      }
      if (result) {
        clearInterval(timer)
        resolve(result)
      }
    };
    timer = globalThis.setInterval(intervalExecLoop.bind(null, args), timeout)
    if (immediate) {
      intervalExecLoop(args)
    }
    return promise
  };
}

export default intervalExec
