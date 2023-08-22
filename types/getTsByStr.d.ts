/**
 * 跟进字符串获取时间戳;默认返回毫秒级时间戳
 *
 * @param str 1d, 1m, 1h, 1w, 1y
 * @param rtnType
 */
export declare const getTsByStr: (str: string | number, rtnType?: 'second' | 'millisecond') => number;
export default getTsByStr;
