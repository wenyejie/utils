interface PercentageOptions {
    fractionDigits?: number;
    padEnd?: boolean;
    defaultValue?: string;
    onePercent?: number;
    symbol?: string;
}
/**
 * 百分比格式化
 * 当返回的数据中自带%符号时, 默认它已经转换成了100%
 * @param value
 * @param options
 */
export declare const percentage: (value: number | string, options?: PercentageOptions) => string;
export default percentage;
