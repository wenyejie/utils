/**
 * 把其它格式数据转换成日期
 * @param date
 */
export declare const toDate: (date: Date | string | number) => Date | null;
/**
 * 返回一个跟旧对象不同的日期对象
 * @param date
 */
export declare const toNewDate: (date: Date | string | number) => Date | null;
export default toDate;
