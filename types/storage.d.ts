/**
 * 自定义存储类
 */
declare class CustomStorage {
    private storage;
    constructor(name: string);
    /**
     * 获取存储内容
     * @param key
     */
    get(key: string): any;
    /**
     * 保存键值到存储空间
     * @param key
     * @param value
     */
    set(key: string, value: any): void;
    /**
     * 移除存储值
     * @param key
     */
    remove(key: string): void;
    /**
     * 清空所有存储
     */
    clear(): void;
    /**
     * 返回第index个存储的内容, index从0开始
     * @param index
     */
    key(index: number): any;
    /**
     * 返回存储内容长度
     */
    length(): number;
}
export declare const localCustomStorage: CustomStorage;
export declare const sessionCustomStorage: CustomStorage;
export type StorageMethod = {
    (name: string): any;
    (name: string, value: null): void;
    (name: string, value: any): void;
};
/**
 * 实例化封装sessionStorage
 */
export declare const session: StorageMethod;
/**
 * 实例化封装localStorage
 */
export declare const local: StorageMethod;
export {};
