export type StorageMode = 'local' | 'session';
/**
 * 缓存请求
 */
export declare class CatchRequest {
    private loading;
    private timestamp;
    private options;
    private readonly storage;
    private data;
    private promise;
    /**
     * 构造函数
     * @param options 选项
     */
    constructor(options: any);
    /**
     * 获取数据
     * @param disableCache 是否禁用缓存
     */
    get(disableCache?: boolean): Promise<any>;
    /**
     * 判断缓存的数据有没有超时, 即: 没有设置超时, 或者没有超时
     */
    isTimeout(): boolean;
    /**
     * 获取存储名称
     */
    getStorageName(): string;
    /**
     * 移除存储的信息
     */
    remove(): void;
    /**
     * 创建新的实例
     * @param options
     */
    static create(options: any): CatchRequest;
    /**
     * 移除本地的缓存存储
     * @param storageName
     * @param storageMode
     */
    static remove(storageName: string, storageMode?: StorageMode): void;
    /**
     * 移除所有的缓存请求数据
     * @param storageMode
     */
    static removeAll(storageMode: StorageMode): void;
}
export default CatchRequest;
