export declare const add: (num1: number | string, num2: number | string) => number;
export declare const multiAdd: (...nums: (number | string)[]) => number;
export declare const subtract: (num1: number | string, num2: number | string) => number;
export declare const multiSubtract: (...nums: (number | string)[]) => number;
export declare const multiply: (num1: number | string, num2: number | string) => number;
/**
 * 累乘
 * @param nums
 */
export declare const multiMultiply: (...nums: (number | string)[]) => number;
export declare const divide: (num1: number | string, num2: number | string) => number;
export declare const multiDivide: (...nums: (number | string)[]) => number;
export declare const remain: (num1: number | string, num2: number | string) => number;
/**
 * 简单的四则运算不包括括号
 * @param expression 简单表达式
 */
export declare const arithmetic: (expression: string) => number;
/**
 * 解析表达式并返回计算结果
 * @param arithmeticStr
 */
export declare const exactMath: (arithmeticStr: string) => number;
export default exactMath;
