/**
 * 缓存允许结果, 使方法只允许一次
 * @param fn
 */
export declare const once: (fn: (...rest: any[]) => any) => () => void;
export default once;
