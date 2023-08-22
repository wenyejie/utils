interface DateObjResult {
    year?: number;
    month?: number;
    day?: number;
    week?: number;
    hour?: number;
    minute?: number;
    second?: number;
    millisecond?: number;
    time?: number;
}
/**
 * 获取获取日期对象
 * @param date
 */
export declare const dateObj: (date?: Date | string | number) => DateObjResult;
export default dateObj;
