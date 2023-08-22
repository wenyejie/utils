interface LoadOptions {
    before?: (...rest: any[]) => void;
    mode?: string;
    attrs?: Record<string, any>;
}
/**
 * 载入script
 * @param tagName
 * @param url
 * @param options
 */
export declare const load: (tagName: keyof HTMLElementTagNameMap, url: string, options?: LoadOptions) => Promise<HTMLElement>;
export default load;
