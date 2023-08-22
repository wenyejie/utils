/**
 * 从一个对象中选中一些属性并返回一个新函数,不影响原有对象
 * @param data
 * @param rest
 */
export declare const pick: (data: Record<PropertyKey, any>, ...rest: any[]) => Record<PropertyKey, any>;
export default pick;
