/**
 * 缓存执行结果, 只有一次
 * @param fn
 */
export declare const cachedOne: (fn: (...rest: any[]) => any) => () => void;
export default cachedOne;
