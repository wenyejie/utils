/**
 * 交换对象中的两个属性值
 * @param obj
 * @param i
 * @param j
 */
export declare const swap: <T extends PropertyKey, K extends unknown>(obj: Record<T, K>, i: T, j: T) => Record<T, K>;
export default swap;
