/**
 * 通过属性移除子项
 * @param array
 * @param key
 * @param value
 */
export declare const removeItemByProp: <T>(array: T[], key: PropertyKey | Record<PropertyKey, any>, value: any) => T[];
/**
 * 移除数组中的元素, 会改变原数组
 *
 * pullOne([1,2,3,4], 1)
 *
 * @param array
 * @param value
 */
export declare const removeVal: <T>(array: T[], value: any) => T[];
/**
 * 移除数组中的元素, 会改变原数组
 *
 * pull([1,2,3,4], 1)
 *
 * @param array
 * @param values
 */
export declare const remove: <T>(array: T[], ...values: any[]) => T[];
