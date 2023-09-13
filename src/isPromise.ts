/**
 * 判断是否为promise
 * @param obj 对象
 */
export const isPromise = (obj: unknown) => obj instanceof Promise

export default isPromise
