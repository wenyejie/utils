interface MoneyFormatOptions {
    decimal?: number;
    symbol?: string;
    default?: string;
    split?: string;
    length?: number;
    padEnd?: boolean;
}
/**
 * 金额格式化
 * @param number
 * @param options
 */
export declare const moneyFormat: (number: number | string, options?: MoneyFormatOptions) => string;
export default moneyFormat;
