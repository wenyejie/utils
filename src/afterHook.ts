/**
 * afterHook
 * @param fn
 * @param callback
 */
export const afterHook = <R, T>(fn: (...args: T[]) => R, callback: (result: R) => R) => {
  return function (...args: T[]) {
    const result = fn.apply(this, args)
    return callback(result)
  }
};
