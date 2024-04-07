import { globalThis } from './globalThis'

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
  <T>(callback: () => T): () => Promise<T>
  /**
   * @param callback 回调
   * @param timeout 轮询时间
   */
  <T>(callback: () => T, timeout: number): () => Promise<T>
  /**
   * @param callback 回调
   * @param immediate 是否立即执行一次
   */
  <T>(callback: () => T, immediate: boolean): () => Promise<T>
  /**
   * @param callback 回调
   * @param options 选项
   */
  <T>(callback: () => T, options: IntervalExecOptions): () => Promise<T>
} = <T>(callback: () => T, options:IntervalExecLikeOptions = {}): () => Promise<T> => {
  const { timeout, immediate } = normalizedOptions(options)
  const { resolve, promise }:IntervalExecResolvers<T> = Promise.withResolvers()
  let timer = 0
  const intervalExecLoop = () => {
    const result = callback();
    if (result) {
      clearInterval(timer);
      resolve(result);
    }
  }

  return () => {
    timer = globalThis.setInterval(intervalExecLoop, timeout);
    if (immediate) {
      intervalExecLoop();
    }
    return promise
  };
}

export default intervalExec
