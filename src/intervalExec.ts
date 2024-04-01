import { globalThis } from './globalThis'

export interface IntervalExecOptions {
  timeout?: number
  isFirst?: boolean
}

interface IntervalExecResolvers<T> {
  resolve: (value?: T) => void;
  promise: Promise<T>;
}

export type intervalExecLikeOptions = number | boolean | IntervalExecOptions

const DEFAULT_OPTIONS = {
  timeout: 300,
  isFirst: true
}

const normalizedOptions = (options:intervalExecLikeOptions):IntervalExecOptions => {
  if (typeof options === 'number') {
    return { ...DEFAULT_OPTIONS, timeout: options }
  }
  if (typeof options === 'boolean') {
    return { ...DEFAULT_OPTIONS, isFirst: options }
  }
  return { ...DEFAULT_OPTIONS, ...options }
}

/**
 * 一个辅助函数，用于以指定的时间间隔重复执行回调，直到满足特定条件。
 *
 * @template T - 回调函数返回值的类型
 * @param {() => T} callback - 回调函数
 * @param {intervalExecLikeOptions} [options={}] - 选型
 * @returns {Promise<T>} -
 */
export const intervalExec = <T>(callback: () => T, options:intervalExecLikeOptions = {}): Promise<T> => {
  const { timeout, isFirst } = normalizedOptions(options)
  const { resolve, promise }:IntervalExecResolvers<T> = Promise.withResolvers()
  let timer = 0
  const intervalExecLoop = () => {
    const result = callback();
    if (result) {
      clearInterval(timer);
      resolve(result);
    }
  }
  timer = globalThis.setInterval(intervalExecLoop, timeout);
  if (isFirst) {
    intervalExecLoop();
  }
  return promise;
}

export default intervalExec
