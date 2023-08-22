/**
 * 从对象中选中一些属性移除, 剩下的属性组成新的对象并返回,不影响原有对象
 * @param data
 * @param rest
 */
export declare const ban: <T extends Record<PropertyKey, any>>(data: T, ...rest: PropertyKey[]) => Record<PropertyKey, any>;
export default ban;
