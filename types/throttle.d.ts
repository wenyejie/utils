/**
 * 函数节流 - 间隔一定时间后执行, 地铁
 * @param fn 函数
 * @param interval 时间间隔
 * @param isFirst 第一次是否立即执行
 */
export declare const throttle: (fn: (...rest: any[]) => any, interval?: number, isFirst?: boolean) => (...rest: any[]) => void;
export default throttle;
