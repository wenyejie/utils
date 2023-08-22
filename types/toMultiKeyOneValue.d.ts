type targetType = Record<string, any>;
/**
 * 返回一个类, 多个key对应一个value, 其实就是共用一个引用地址
 * @param data
 */
export declare const toMultiKeyOneValue: (data: any[][]) => targetType;
export default toMultiKeyOneValue;
