/**
 * 缓存执行结果, 当结果输入相同时, 不再执行
 * @param fn
 */
export declare const cached: (fn: (...rest: any[]) => any) => () => any;
export default cached;
