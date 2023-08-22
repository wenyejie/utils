/**
 * 通过属性查找对应属性值
 * @param data 查找的数据
 * @param propValue 查找的属性值
 * @param propKey 查找的属性
 * @param returnKey 返回的属性
 */
export declare const findProps: <T extends Record<PropertyKey, any>>(data: T[], propValue: any, propKey?: PropertyKey, returnKey?: PropertyKey) => any;
export default findProps;
