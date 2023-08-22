interface DatetimeSpanOptions {
    hasYear?: boolean;
    year?: number;
    hasMonth?: boolean;
    month?: number;
    hasDay?: boolean;
    day?: number;
    hasHour?: boolean;
    hour?: number;
    hasMinute?: boolean;
    minute?: number;
    hasSecond?: boolean;
    second?: number;
    hasMillisecond?: boolean;
    millisecond?: number;
    defaultValue?: string;
    compare?: Date;
}
interface DatetimeSpanResult {
    year?: number;
    month?: number;
    day?: number;
    hour?: number;
    minute?: number;
    second?: number;
    millisecond?: number;
}
/**
 * 获取时间戳的年月日,
 * 比如: 剩余1年28天6时30分
 * @param date
 * @param options
 */
export declare const datetimeSpan: (date: Date | string | number, options?: DatetimeSpanOptions) => DatetimeSpanResult;
export default datetimeSpan;
