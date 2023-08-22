/**
 * 判断key是否是对象自己的属性
 * @param object { Object }
 * @param key { string }
 */
export declare const hasOwn: (object: Record<PropertyKey, any>, key: string | number | symbol) => boolean;
export default hasOwn;
