/**
 * 获取月份范围
 * @param date 可以被new Date转换的数据
 * @param type 范围 range | start | end
 */
export declare const monthRange: (date: Date | string | number, type?: string) => Date | {
    start: any;
    end: any;
};
export default monthRange;
