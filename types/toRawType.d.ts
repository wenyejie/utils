/**
 * 返回数据的类型 ex. string, number, boolean
 * @param obj
 */
export declare const toRawType: (obj: unknown) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "map" | "set" | "blob" | "null" | "weakmap" | "weakset" | "date" | "array" | "regexp";
export default toRawType;
