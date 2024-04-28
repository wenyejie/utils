import { globalThis } from './globalThis'

/**
 * 修复setInterval在js中的不准时问题
 * @param handle 处理函数
 * @param timeout 超时时间
 */
export const setOnInterval = (handle: Function, timeout: number) => {
  let time = Date.now() + timeout
  let nextTime = timeout
  return globalThis.setInterval(() => {
    handle()
    nextTime =  Date.now() - time
    time += timeout
    while (nextTime > timeout) {
      handle()
      nextTime -= timeout
      time += timeout
    }
  }, nextTime)
}
