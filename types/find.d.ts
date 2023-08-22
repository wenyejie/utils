/**
 * 根据键值对从数组中查找子项
 * @param obj
 * @param key
 * @param value
 */
export declare const find: <P extends PropertyKey, T extends Record<P, any>>(obj: T[], key: P | T, value: any) => T;
export default find;
