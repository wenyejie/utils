/**
 * 装饰器模式
 * 装饰器模式能够在不改变对象自身的基础上，在程序运行期间给对像动态地添加职责。
 * @param fn
 * @param callback
 */
export const beforeHook = <T, R>(fn: (...args: T[]) => R, callback: (...args: T[]) => T[]) => {
  return function (...args: T[]) {
    const newArgs = callback(...args)
    return fn.apply(this, newArgs) as R
  }
}
