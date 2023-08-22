/**
 * 读取css属性
 * @param elt 元素
 * @param name 属性名称
 * @param pseudo 伪元素 'before' | 'after'
 */
export declare const getCSS: (elt: HTMLElement, name?: string, pseudo?: 'before' | 'after') => any;
/**
 * 设置css属性
 * @param elt 元素
 * @param name 属性名称
 * @param value 属性值
 */
export declare const setCSS: (elt: HTMLElement, name?: string | Record<string, any>, value?: any) => void;
/**
 * 判断是否支持CSS属性
 * @param name
 * @param value
 * @param tagName
 */
export declare const supportCSS: (name: string, value: any, tagName?: string) => boolean;
declare const _default: {
    get: (elt: HTMLElement, name?: string, pseudo?: "after" | "before") => any;
    set: (elt: HTMLElement, name?: string | Record<string, any>, value?: any) => void;
    support: (name: string, value: any, tagName?: string) => boolean;
};
export default _default;
