/**
 * 克隆一个对象
 * @param obj 对象
 * @param deep 是否需要深度克隆
 * @param weakMap weakMap 避免死循环
 */
export declare const clone: <T>(obj: T, deep?: boolean, weakMap?: WeakMap<object, any>) => T;
export default clone;
