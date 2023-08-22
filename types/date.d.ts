interface TimeDistanceOptions {
    yearFormat?: string;
    dayFormat?: string;
    hoursAgo?: string;
    minutesAgo?: string;
    daysAgo?: string;
    days?: number;
    just?: string;
    compare?: Date;
}
/**
 * 返回日期与当前时间的距离
 * @param date
 * @param options
 */
export declare const timeDistance: (date: Date | string | number, options?: TimeDistanceOptions) => string;
export default timeDistance;
