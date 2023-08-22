/**
 * 函数防抖 - 当一定时间之后没有重新调用则执行, 电梯
 * @param fn
 * @param interval 时间间隔
 * @param isFirst 第一次是否立即执行
 */
export declare const debounce: (fn: (...rest: any[]) => void, interval?: number, isFirst?: boolean) => (...rest: any[]) => void;
export default debounce;
