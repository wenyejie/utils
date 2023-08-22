declare module "isArray" {
    export const isArray: (arg: any) => arg is any[];
    export default isArray;
}
declare module "isInteger" {
    export const isInteger: (number: unknown) => boolean;
    export default isInteger;
}
declare module "isNaturalNumber" {
    /**
     * 判断是否为自然数(包括0)
     * @param obj
     */
    export const isNaturalNumber: (obj: number) => boolean;
    export default isNaturalNumber;
}
declare module "array" {
    /**
     * 是否正确的数组下标
     * @param arr 数组
     * @param inx 数组下标
     */
    export const isTrulyArrInx: (arr: unknown[], inx: number) => boolean;
    /**
     * 数组子项上移
     * @param arr 数组
     * @param item 子项
     * @param inx 下标
     */
    export const arrUpItem: <T>(arr: T[], item: T, inx: number) => T[];
    /**
     * 数组子项下移
     * @param arr 数组
     * @param item 子项
     * @param inx 下标
     */
    export const arrDownItem: <T>(arr: T[], item: T, inx: number) => T[];
    /**
     * 数组子项删除
     * @param arr 数组
     * @param inx 下标
     */
    export const arrDelItem: <T>(arr: T[], inx: number) => T[];
}
declare module "objectToString" {
    export const objectToString: () => string;
    export default objectToString;
}
declare module "toTypeString" {
    /**
     * 返回对象的类型 ex. [object string] [object number]
     * @param obj
     */
    export const toTypeString: (obj: unknown) => string;
    export default toTypeString;
}
declare module "toRawType" {
    /**
     * 返回数据的类型 ex. string, number, boolean
     * @param obj
     */
    export const toRawType: (obj: unknown) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "map" | "set" | "blob" | "null" | "weakmap" | "weakset" | "date" | "array" | "regexp";
    export default toRawType;
}
declare module "isObject" {
    /**
     * 判断是否为对象
     * @param obj
     */
    export const isObject: (obj: any) => boolean;
    export default isObject;
}
declare module "ban" {
    /**
     * 从对象中选中一些属性移除, 剩下的属性组成新的对象并返回,不影响原有对象
     * @param data 数据
     * @param rest 移除key
     */
    export const ban: <T extends Record<PropertyKey, any>>(data: T, ...rest: PropertyKey[]) => Record<PropertyKey, any>;
    export default ban;
}
declare module "isString" {
    /**
     * 判断一个数据是否为string类型
     * @param obj
     */
    export const isString: (obj: any) => boolean;
    export default isString;
}
declare module "removeSpace" {
    /**
     * 移除字符串中的空格
     * @param string
     */
    const removeSpace: (string: string) => string;
    export default removeSpace;
}
declare module "bankCardFormat" {
    /**
     * 银行卡格式化
     * @param card 卡号
     */
    export const bankCardFormat: (card: string) => string;
    export default bankCardFormat;
}
declare module "globalThis" {
    /**
     * 获取globalThis
     */
    export const getGlobalThis: () => typeof globalThis;
    const _default: Window & typeof globalThis;
    export default _default;
}
declare module "base642file" {
    /**
     * base64 to file
     * @param base64 base64文件
     * @param filename 文件名称
     */
    export const base642file: (base64: string, filename: string) => File;
    export default base642file;
}
declare module "cached" {
    /**
     * 缓存执行结果, 当结果输入相同时, 不再执行
     * @param fn
     */
    export const cached: (fn: (...rest: any[]) => any) => () => any;
    export default cached;
}
declare module "once" {
    /**
     * 缓存允许结果, 使方法只允许一次
     * @param fn
     */
    export const once: (fn: (...rest: any[]) => any) => () => void;
    export default once;
}
declare module "cachedOne" {
    /**
     * 缓存执行结果, 只有一次
     * @param fn
     */
    export const cachedOne: (fn: (...rest: any[]) => any) => () => void;
    export default cachedOne;
}
declare module "camelize" {
    /**
     * 把横杠命名转化为驼峰命名
     * @param str
     */
    export const camelize: (str: string) => string;
    export default camelize;
}
declare module "capitalize" {
    export const capitalize: (str: string) => string;
    export default capitalize;
}
declare module "env" {
    export const inBrowser: () => boolean;
    export const inNode: () => boolean;
    export const useragent: () => string;
    export const isAndroid: () => boolean;
    export const isEdge: () => boolean;
    export const isChrome: () => boolean;
    export const isSafari: () => boolean;
    export const isFirefox: () => boolean;
    export const isIE: () => boolean;
    export const isIE9: () => boolean;
    export const isIOS: () => boolean;
    export const isIPad: () => boolean;
    export const isIPhone: () => boolean;
    export const isMobile: () => boolean;
    export const isPC: () => boolean;
    export const isPhantom: () => boolean;
    export const isWeChat: () => boolean;
    export const isWindows: () => boolean;
    export const isMac: () => boolean;
    export const isUbuntu: () => boolean;
    export const isLinux: () => boolean;
}
declare module "emptyObject" {
    export const emptyObject: Readonly<{}>;
    export default emptyObject;
}
declare module "storage" {
    /**
     * 自定义存储类
     */
    class CustomStorage {
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
    export const localCustomStorage: CustomStorage;
    export const sessionCustomStorage: CustomStorage;
    export type StorageMethod = {
        (name: string): any;
        (name: string, value: null): void;
        (name: string, value: any): void;
    };
    /**
     * 实例化封装sessionStorage
     */
    export const session: StorageMethod;
    /**
     * 实例化封装localStorage
     */
    export const local: StorageMethod;
}
declare module "isFunction" {
    /**
     * 判断是否为函数
     * @param obj
     */
    export const isFunction: (obj: any) => boolean;
    export default isFunction;
}
declare module "catchRequest" {
    export type StorageMode = 'local' | 'session';
    /**
     * 缓存请求
     */
    export class CatchRequest {
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
}
declare module "regexp" {
    export const rHttps: RegExp;
    export const rHttp: RegExp;
    export const rIOSDateStringFormat: RegExp;
    export const rInteger: RegExp;
    export const rMobilePhone: RegExp;
    export const rTelephone: RegExp;
    export const rPhone: RegExp;
    export const rIDCardNO: RegExp;
    export const rBankCardNO: RegExp;
    export const rChinese: RegExp;
    export const rChineseName: RegExp;
    export const rEmail: RegExp;
    export const rUrl: RegExp;
    export const rEmoji: RegExp;
    export const rPostcode: RegExp;
    export const rAmount: RegExp;
}
declare module "checkIDNO" {
    /**
     * 检验身份证号码是否正确,
     * @param id 身份证号码
     */
    export const checkIDNO: (id: string) => boolean;
    export default checkIDNO;
}
declare module "checkTaxpayerIDNO" {
    /**
     * 校验纳税人识别号, 是否正确
     * @param taxId
     */
    export const checkTaxpayerIDNO: (taxId: string) => boolean;
    export default checkTaxpayerIDNO;
}
declare module "isPrimitive" {
    /**
     * 判断是否为原始类型
     * @param obj
     */
    export const isPrimitive: (obj: unknown) => boolean;
    export default isPrimitive;
}
declare module "isSet" {
    /**
     * 判断一个数据是否为正确的date类型
     * @param obj
     */
    export const isSet: (obj: any) => boolean;
    export default isSet;
}
declare module "isMap" {
    /**
     * 判断一个数据是否为map类型
     * @param obj 对象
     */
    export const isMap: (obj: unknown) => boolean;
    export default isMap;
}
declare module "isJson" {
    /**
     * 判断数据是否为JSON类型
     * @param obj
     */
    export const isJson: (obj: unknown) => boolean;
    export default isJson;
}
declare module "isWeakMap" {
    /**
     * 判断一个数据是否为正确的date类型
     * @param obj
     */
    export const isWeakMap: (obj: unknown) => boolean;
    export default isWeakMap;
}
declare module "isWeakSet" {
    /**
     * 判断一个数据是否为正确的date类型
     * @param obj 对象
     */
    export const isWeakSet: (obj: unknown) => boolean;
    export default isWeakSet;
}
declare module "clone" {
    /**
     * 克隆一个对象
     * @param obj 对象
     * @param deep 是否需要深度克隆
     * @param weakMap weakMap 避免死循环
     */
    export const clone: <T>(obj: T, deep?: boolean, weakMap?: WeakMap<object, any>) => T;
    export default clone;
}
declare module "countdown" {
    interface CountdownOptions {
        timeout?: number;
        autostart?: boolean;
        padStart?: boolean;
        change?(...rest: any[]): any;
        start?(...rest: any[]): any;
        stop?(...rest: any[]): any;
        restart?(...rest: any[]): any;
        end?(...rest: any[]): any;
    }
    /**
     * 倒计时
     * @param second
     * @param options
     */
    export class Countdown {
        private readonly second;
        private readonly options;
        private count;
        private timer;
        constructor(second: number, options?: CountdownOptions | CountdownOptions['change']);
        private callback;
        loop(): void;
        restart(): void;
        start(): void;
        stop(): void;
        static create(second: number, options: CountdownOptions | CountdownOptions['change']): Countdown;
    }
    export const countdown: typeof Countdown.create;
    export default countdown;
}
declare module "hyphenate" {
    /**
     * 驼峰命名转横杠命名
     * @param str
     */
    export const hyphenate: (str: string) => string;
    export default hyphenate;
}
declare module "isElement" {
    /**
     * 判断是否为元素
     * @param obj
     */
    export const isElement: (obj: HTMLElement) => boolean;
    export default isElement;
}
declare module "css" {
    /**
     * 读取css属性
     * @param elt 元素
     * @param name 属性名称
     * @param pseudo 伪元素 'before' | 'after'
     */
    export const getCSS: (elt: HTMLElement, name?: string, pseudo?: 'before' | 'after') => any;
    /**
     * 设置css属性
     * @param elt 元素
     * @param name 属性名称
     * @param value 属性值
     */
    export const setCSS: (elt: HTMLElement, name?: string | Record<string, any>, value?: any) => void;
    /**
     * 判断是否支持CSS属性
     * @param name
     * @param value
     * @param tagName
     */
    export const supportCSS: (name: string, value: any, tagName?: string) => boolean;
    const _default_1: {
        get: (elt: HTMLElement, name?: string, pseudo?: "after" | "before") => any;
        set: (elt: HTMLElement, name?: string | Record<string, any>, value?: any) => void;
        support: (name: string, value: any, tagName?: string) => boolean;
    };
    export default _default_1;
}
declare module "isDate" {
    /**
     * 判断一个数据是否为正确的date类型
     * @param obj 对象
     */
    export const isDate: (obj: any) => boolean;
    export default isDate;
}
declare module "isNumber" {
    /**
     * 判断一个对象是否为数字类型
     * @param obj
     */
    export const isNumber: (obj: any) => boolean;
    export default isNumber;
}
declare module "toDate" {
    /**
     * 把其它格式数据转换成日期
     * @param date
     */
    export const toDate: (date: Date | string | number) => Date | null;
    /**
     * 返回一个跟旧对象不同的日期对象
     * @param date
     */
    export const toNewDate: (date: Date | string | number) => Date | null;
    export default toDate;
}
declare module "datetimeSpan" {
    interface DatetimeSpanOptions {
        hasYear?: boolean;
        year?: number;
        hasMonth?: boolean;
        month?: number;
        hasDay?: boolean;
        day?: number;
        hasHour?: boolean;
        hour?: number;
        hasMinute?: boolean;
        minute?: number;
        hasSecond?: boolean;
        second?: number;
        hasMillisecond?: boolean;
        millisecond?: number;
        defaultValue?: string;
        compare?: Date;
    }
    interface DatetimeSpanResult {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
        millisecond?: number;
    }
    /**
     * 获取时间戳的年月日,
     * 比如: 剩余1年28天6时30分
     * @param date
     * @param options
     */
    export const datetimeSpan: (date: Date | string | number, options?: DatetimeSpanOptions) => DatetimeSpanResult;
    export default datetimeSpan;
}
declare module "isUndefined" {
    /**
     * 判断一个对象是否为undefined, 包含undefined和null
     * @param obj 对象
     */
    export const isUndefined: (obj: unknown) => boolean;
    export default isUndefined;
}
declare module "isNull" {
    /**
     * 判断一个值是否为null
     * @param value
     */
    export const isNull: (value: unknown) => boolean;
    export default isNull;
}
declare module "padStart" {
    /**
     * 前置填充
     * @param string
     * @param maxLength
     * @param fillString
     */
    export const padStart: (string: string | number, maxLength?: number, fillString?: string) => string;
    export default padStart;
}
declare module "dateFormat" {
    /**
     * 把相关数据转换成
     * @param date 日期
     * @param format 格式
     * @param defaultValue string
     */
    export const dateFormat: (date: Date | string | number, format?: string, defaultValue?: string) => string;
    export default dateFormat;
}
declare module "date" {
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
     * @param date 日期
     * @param options 选项
     */
    export const timeDistance: (date: Date | string | number, options?: TimeDistanceOptions) => string;
    export default timeDistance;
}
declare module "dateObj" {
    interface DateObjResult {
        year?: number;
        month?: number;
        day?: number;
        week?: number;
        hour?: number;
        minute?: number;
        second?: number;
        millisecond?: number;
        time?: number;
    }
    /**
     * 获取获取日期对象
     * @param date
     */
    export const dateObj: (date?: Date | string | number) => DateObjResult;
    export default dateObj;
}
declare module "dayRange" {
    /**
     * 返回一天的开始
     * @param date
     */
    export const dayStart: (date: Date) => Date;
    /**
     * 返回一天的结束
     * @param date
     */
    export const dayEnd: (date: Date) => Date;
}
declare module "debounce" {
    /**
     * 函数防抖 - 当一定时间之后没有重新调用则执行, 电梯
     * @param fn
     * @param interval 时间间隔
     * @param isFirst 第一次是否立即执行
     */
    export const debounce: (fn: (...rest: any[]) => void, interval?: number, isFirst?: boolean) => (...rest: any[]) => void;
    export default debounce;
}
declare module "decimalLength" {
    /**
     * 获取小数点长度
     * @param number
     */
    export const decimalLength: (number: number | string) => number;
    export default decimalLength;
}
declare module "downloadFile" {
    /**
     * 通过url下载
     * PS: 只能下载同源的链接, 如果不是同源的文件请使用downloadBlob方法
     * @param url
     * @param filename
     */
    export const downloadFile: (url: string, filename?: string) => void;
    export default downloadFile;
}
declare module "isBlob" {
    /**
     * 判断是否为blob类型
     * @param obj
     */
    export const isBlob: (obj: unknown) => boolean;
    export default isBlob;
}
declare module "suffix" {
    /**
     * 获取字符串中的后缀
     * @param string 字符串
     */
    export const suffix: (string: string) => string;
    export default suffix;
}
declare module "downloadBlob" {
    /**
     * 下载blob文件
     * 主要用于下载非同源的文件, 采用XMLHttpRequest blob下载方式下载下来或者下载canvas中的图像
     * @param blob blob对象
     * @param filename 文件名称
     */
    export const downloadBlob: (blob: Blob, filename: string) => void;
    export default downloadBlob;
}
declare module "hasOwnProperty" {
    /**
     *
     */
    export const hasOwnProperty: (v: PropertyKey) => boolean;
    export default hasOwnProperty;
}
declare module "hasOwn" {
    /**
     * 判断key是否是对象自己的属性
     * @param object { Object }
     * @param key { string }
     */
    export const hasOwn: (object: Record<PropertyKey, any>, key: string | number | symbol) => boolean;
    export default hasOwn;
}
declare module "each" {
    /**
     * 遍历
     * @param data 数据
     * @param fn 回调
     */
    export const each: (data: any[] | Record<any, any>, fn: (...rest: any[]) => any) => void;
    export default each;
}
declare module "toNumber" {
    export const toNumber: (num: string | number, defaultValue?: number) => number;
    export default toNumber;
}
declare module "spliceString" {
    /**
     * 模拟数组的Array.prototype.splice方法
     * @param string 原始字符串
     * @param start 起始位置
     * @param deleteCount 删除个数
     * @param insertString 插入字符
     */
    export const spliceString: (string: string, start: number, deleteCount?: number | string, insertString?: string) => string;
    export default spliceString;
}
declare module "exactMath" {
    /**
     * 加
     * @param num1 加数
     * @param num2 被加数
     */
    export const add: (num1: number | string, num2: number | string) => number;
    /**
     * 累加
     * @param nums 加数和被加数
     */
    export const multiAdd: (...nums: (number | string)[]) => number;
    /**
     * 减
     * @param num1 减数
     * @param num2 被减数
     */
    export const subtract: (num1: number | string, num2: number | string) => number;
    /**
     * 累减
     * @param nums 减数和被减数
     */
    export const multiSubtract: (...nums: (number | string)[]) => number;
    /**
     * 乘
     * @param num1 乘数
     * @param num2 被乘数
     */
    export const multiply: (num1: number | string, num2: number | string) => number;
    /**
     * 累乘
     * @param nums 乘数和被乘数
     */
    export const multiMultiply: (...nums: (number | string)[]) => number;
    /**
     * 除
     * @param num1 除数
     * @param num2 被除数
     */
    export const divide: (num1: number | string, num2: number | string) => number;
    /**
     * 累除
     * @param nums 除数和被除数
     */
    export const multiDivide: (...nums: (number | string)[]) => number;
    /**
     * 求余
     * @param num1 除数
     * @param num2 被除数
     */
    export const remain: (num1: number | string, num2: number | string) => number;
    /**
     * 简单的四则运算不包括括号
     * @param expression 简单表达式
     */
    export const arithmetic: (expression: string) => number;
    /**
     * 解析表达式并返回计算结果
     * @param arithmeticStr
     */
    export const exactMath: (arithmeticStr: string) => number;
    export default exactMath;
}
declare module "file2base64" {
    /**
     * File转base64
     * @param file 文件对象
     */
    export const file2base64: (file: File) => Promise<string>;
    export default file2base64;
}
declare module "find" {
    type Find = {
        <P extends PropertyKey, T extends Record<P, any>>(obj: T[], key: T): T | null;
        <P extends PropertyKey, T extends Record<P, any>>(obj: T[], key: P, value: any): T | null;
    };
    /**
     * 根据键值对从数组中查找子项
     * @param obj 对象数组
     * @param key 关键字
     * @param value 值
     */
    export const find: Find;
    export default find;
}
declare module "findProps" {
    /**
     * 通过属性查找对应属性值
     * @param data 查找的数据
     * @param propValue 查找的属性值
     * @param propKey 查找的属性
     * @param returnKey 返回的属性
     */
    export const findProps: <T extends Record<PropertyKey, any>>(data: T[], propValue: any, propKey?: PropertyKey, returnKey?: PropertyKey) => any;
    export default findProps;
}
declare module "freezeObj" {
    export const freezeObj: Readonly<{}>;
    export default freezeObj;
}
declare module "getDaysByMonth" {
    /**
     * 获取当前月份的天数
     * @param date
     */
    export const getDaysByMonth: (date: Date | string | number) => number;
    export default getDaysByMonth;
}
declare module "isOddNumber" {
    /**
     * 判断是否为奇数
     * @param number
     */
    export const isOddNumber: (number: number) => boolean;
    export default isOddNumber;
}
declare module "nullProtoObject" {
    /**
     * 没有原型链的空对象
     */
    export const nullProtoObject: () => any;
    export default nullProtoObject;
}
declare module "getInfoByCardNO" {
    export const getInfoByCardNO: (cardNumber: any) => (() => any) | {
        province: any;
        city: any;
        area: any;
        address: any;
        year: any;
        month: any;
        day: any;
        date: any;
        sex: string;
    };
    export default getInfoByCardNO;
}
declare module "isNumberString" {
    /**
     * 判断是否为一个数字型字符串
     * @param obj
     */
    export const isNumberString: (obj: unknown) => boolean;
    export default isNumberString;
}
declare module "toMultiKeyOneValue" {
    type targetType = Record<string, any>;
    /**
     * 返回一个类, 多个key对应一个value, 其实就是共用一个引用地址
     * @param data 数据
     */
    export const toMultiKeyOneValue: (data: any[][]) => targetType;
    export default toMultiKeyOneValue;
}
declare module "getTsByStr" {
    /**
     * 跟进字符串获取时间戳;默认返回毫秒级时间戳
     *
     * @param str 1d, 1m, 1h, 1w, 1y
     * @param rtnType 返回类型
     */
    export const getTsByStr: (str: string | number, rtnType?: 'second' | 'millisecond') => number;
    export default getTsByStr;
}
declare module "load" {
    interface LoadOptions {
        before?: (...rest: any[]) => void;
        mode?: string;
        attrs?: Record<string, any>;
    }
    /**
     * 载入script
     * @param tagName 标签名称
     * @param url url地址
     * @param options 选项
     */
    export const load: (tagName: keyof HTMLElementTagNameMap, url: string, options?: LoadOptions) => Promise<HTMLElement>;
    export default load;
}
declare module "imgCompress" {
    /**
     * File转图片
     * @param file File对象
     */
    export const file2img: (file: File) => Promise<HTMLImageElement>;
    interface CreateCanvasResult {
        context: CanvasRenderingContext2D;
        $canvas: HTMLCanvasElement;
    }
    interface ImgCompressOptions {
        noCompressIfLarger?: boolean;
        maxWidth?: number;
        maxHeight?: number;
        fillStyle?: string;
        quality?: number;
    }
    /**
     * 创建画板
     * @param options 选项
     */
    export const createCanvas: (options: ImgCompressOptions) => Promise<CreateCanvasResult>;
    /**
     * 计算画板大小
     * @param $img 图片
     * @param options 选项
     */
    export const calcDrawSize: ($img: HTMLImageElement, options: ImgCompressOptions) => {
        dw: number;
        dh: number;
        dx: number;
        dy: number;
        sx: number;
        sy: number;
        sw: number;
        sh: number;
    };
    /**
     * 画板转File
     * @param $canvas 画板元素
     * @param file 文件对象
     * @param options 选项
     */
    export const canvas2file: ($canvas: HTMLCanvasElement, file: File, options: ImgCompressOptions) => Promise<File>;
    /**
     * 图片压缩: 利用canvas对图片进行压缩
     * @param file 文件对象
     * @param options 选项
     */
    const imgCompress: (file: File, options: ImgCompressOptions) => Promise<File>;
    export default imgCompress;
}
declare module "isBigint" {
    /**
     * 判断数据是不是bigint类型
     * @param obj
     */
    export const isBigint: (obj: unknown) => boolean;
    export default isBigint;
}
declare module "isBoolean" {
    /**
     * 判断数据是不是Boolean类型
     * @param obj
     */
    export const isBoolean: (obj: unknown) => boolean;
    export default isBoolean;
}
declare module "isComment" {
    /**
     * 判断是否为注释
     * @param obj 对象
     */
    export const isComment: (obj: any) => boolean;
    export default isComment;
}
declare module "isDefined" {
    /**
     * 判断是否可以有定义
     * @param obj 数据
     */
    export const isDefined: (obj: unknown) => boolean;
    export default isDefined;
}
declare module "objectLength" {
    /**
     * 获取对象长度
     * @param obj 对象
     */
    export const objectLength: (obj: Record<PropertyKey, any>) => number;
    export default objectLength;
}
declare module "isEmptyValue" {
    /**
     * 判断一个值是否为空值
     * @param value
     */
    export const isEmptyValue: (value: any) => boolean;
    export default isEmptyValue;
}
declare module "isEvenNumber" {
    /**
     * 判断是否为偶数
     * PS: 0也是偶数, 0是一个特殊的偶数。它既是正偶数与负偶数的分界线，又是正奇数与负奇数的分水岭。
     * @param obj
     */
    export const isEvenNumber: (obj: number) => boolean;
    export default isEvenNumber;
}
declare module "isInvalidDate" {
    /**
     * 判断一个数据是否为正确的date类型
     * @param obj
     */
    export const isInvalidDate: (obj: unknown) => boolean;
    export default isInvalidDate;
}
declare module "isJsonString" {
    /**
     * 断数据是否为JSON String
     * @param obj
     */
    export const isJsonString: (obj: unknown) => boolean;
    export default isJsonString;
}
declare module "isPlainDate" {
    /**
     * 判断一个数据是否为date类型
     * @param obj 被判断的对象
     */
    export const isPlainDate: (obj: unknown) => boolean;
    export default isPlainDate;
}
declare module "isPlainNumber" {
    /**
     * 判断是否为数字
     * @param obj
     */
    export const isPlainNumber: (obj: unknown) => boolean;
    export default isPlainNumber;
}
declare module "isPlainObject" {
    /**
     * 判断是否为对象
     * @param obj
     */
    export const isPlainObject: (obj: unknown) => boolean;
    export default isPlainObject;
}
declare module "isPlainString" {
    /**
     * 判断是否为字符串
     * @param obj
     */
    export const isPlainString: (obj: any) => boolean;
    export default isPlainString;
}
declare module "isPositiveInteger" {
    /**
     * 判断是否为正整数(不包括0)
     * @param obj
     */
    export const isPositiveInteger: (obj: number) => boolean;
    export default isPositiveInteger;
}
declare module "isPromise" {
    /**
     * 判断是否为promise
     * @param obj 对象
     */
    export const isPromise: (obj: any) => boolean;
    export default isPromise;
}
declare module "isRegExp" {
    /**
     * 判断是否为正则表达式
     * @param obj
     */
    export const isRegExp: (obj: unknown) => boolean;
    export default isRegExp;
}
declare module "isSameDay" {
    /**
     * 判断两个日期是否在同一天
     * @param date1
     * @param date2
     */
    export const isSameDay: (date1: Date | string | number, date2: Date | string | number) => boolean;
    export default isSameDay;
}
declare module "isSameHost" {
    /**
     * 判断两个链接地址是否为同一个域名, 是否会跨域
     * @param urlA
     * @param urlB
     */
    export const isSameHost: (urlA: string, urlB?: string) => boolean;
    export default isSameHost;
}
declare module "isSameMonth" {
    /**
     * 判断两个日期是否在同一月
     * @param date1
     * @param date2
     */
    export const isSameMonth: (date1: Date | string | number, date2: Date | string | number) => boolean;
    export default isSameMonth;
}
declare module "isSameYear" {
    /**
     * 判断两个日期是否在同一月
     * @param date1
     * @param date2
     */
    export const isSameYear: (date1: Date | string | number, date2: Date | string | number) => boolean;
    export default isSameYear;
}
declare module "isSupportWebp" {
    /**
     * 判断浏览器是否支持webp
     */
    export const isSupportWebp: () => void;
    export default isSupportWebp;
}
declare module "isSymbol" {
    /**
     * 判断是否为symbol类型
     * @param obj
     */
    export const isSymbol: (obj: unknown) => boolean;
    export default isSymbol;
}
declare module "isText" {
    /**
     * 判断是否为文本
     * @param obj
     */
    export const isText: (obj: HTMLElement) => boolean;
    export default isText;
}
declare module "phoneNumFormat" {
    /**
     * 手机号码中间四位隐藏
     * @param phone
     */
    export const phoneNumFormat: (phone: string) => string;
    export default phoneNumFormat;
}
declare module "mobilePhoneFormat" {
    /**
     * 手机号码格式化显示
     */
    export const mobilePhoneFormat: (phone: string) => string;
    export default mobilePhoneFormat;
}
declare module "money2cn" {
    /**
     * 金额转中文大写
     * @param n 金额
     */
    export const money2cn: (n: number | string) => string;
    export default money2cn;
}
declare module "moneyFormat" {
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
     * @param number 金额
     * @param options 选项
     */
    export const moneyFormat: (number: number | string, options?: MoneyFormatOptions) => string;
    export default moneyFormat;
}
declare module "monthRange" {
    /**
     * 获取月份范围
     * @param date 可以被new Date转换的数据
     * @param type 范围 range | start | end
     */
    export const monthRange: (date: Date | string | number, type?: string) => Date | {
        start: any;
        end: any;
    };
    export default monthRange;
}
declare module "noop" {
    /**
     * 空函数
     */
    export const noop: () => void;
    export default noop;
}
declare module "padEnd" {
    /**
     * 后置填充
     * @param string {string | number | undefined | null}
     * @param maxLength
     * @param fillString
     * @returns {string}
     */
    export const padEnd: (string: string | number, maxLength?: number, fillString?: string) => string;
    export default padEnd;
}
declare module "percentage" {
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
     * @param value 数据
     * @param options 选项
     */
    export const percentage: (value: number | string, options?: PercentageOptions) => string;
    export default percentage;
}
declare module "pick" {
    /**
     * 从一个对象中选中一些属性并返回一个新函数,不影响原有对象
     * @param data
     * @param rest
     */
    export const pick: (data: Record<PropertyKey, any>, ...rest: any[]) => Record<PropertyKey, any>;
    export default pick;
}
declare module "prefix" {
    /**
     * 获取字符串中的前缀
     * @param string 字符串
     */
    export const prefix: (string: string) => string;
    export default prefix;
}
declare module "randomInteger" {
    /**
     * 随机整数
     * @param max
     * @param min
     */
    export const randomInteger: (max: number, min?: number) => number;
    export default randomInteger;
}
declare module "randomNumber" {
    /**
     * 随机数
     * @param max
     * @param min
     */
    export const randomNumber: (max: number, min?: number) => number;
    export default randomNumber;
}
declare module "remove" {
    /**
     * 通过属性移除子项
     * @param array
     * @param key
     * @param value
     */
    export const removeItemByProp: <T>(array: T[], key: PropertyKey | Record<PropertyKey, any>, value: any) => T[];
    /**
     * 移除数组中的元素, 会改变原数组
     *
     * pullOne([1,2,3,4], 1)
     *
     * @param array
     * @param value
     */
    export const removeVal: <T>(array: T[], value: any) => T[];
    /**
     * 移除数组中的元素, 会改变原数组
     *
     * pull([1,2,3,4], 1)
     *
     * @param array
     * @param values
     */
    export const remove: <T>(array: T[], ...values: any[]) => T[];
}
declare module "script" {
    /**
     * 载入script
     * @param url
     * @param options
     */
    export const script: (url: any, options: any) => Promise<HTMLElement>;
    export default script;
}
declare module "swap" {
    /**
     * 交换对象中的两个属性值
     * @param obj
     * @param i
     * @param j
     */
    export const swap: <T extends PropertyKey, K extends unknown>(obj: Record<T, K>, i: T, j: T) => Record<T, K>;
    export default swap;
}
declare module "throttle" {
    /**
     * 函数节流 - 间隔一定时间后执行, 地铁
     * @param fn 函数
     * @param interval 时间间隔
     * @param isFirst 第一次是否立即执行
     */
    export const throttle: (fn: (...rest: any[]) => any, interval?: number, isFirst?: boolean) => (...rest: any[]) => void;
    export default throttle;
}
declare module "toCSSUnit" {
    /**
     * 把输入转换为css长度单位
     * @param number 数字
     * @param defaultUnit 默认单位
     */
    export const toCSSUnit: (number: number | string, defaultUnit?: string) => string;
    export default toCSSUnit;
}
declare module "unique" {
    /**
     * 数组去重
     * @param array
     */
    export const unique: <T>(array: T[]) => T[];
    export default unique;
}
declare module "url2http" {
    /**
     * url2https
     * @param url
     */
    export const url2http: (url: string) => string;
    export default url2http;
}
declare module "url2https" {
    /**
     * url2https
     * @param url
     */
    export const url2https: (url: string) => string;
    export default url2https;
}
declare module "wenyejie" {
    export const VERSION = "2.0.0";
    export * from "array";
    export * from "ban";
    export * from "bankCardFormat";
    export * from "base642file";
    export * from "cached";
    export * from "cachedOne";
    export * from "camelize";
    export * from "capitalize";
    export * from "catchRequest";
    export * from "checkIDNO";
    export * from "checkTaxpayerIDNO";
    export * from "clone";
    export * from "countdown";
    export * from "css";
    export * from "date";
    export * from "dateFormat";
    export * from "dateObj";
    export * from "datetimeSpan";
    export * from "dayRange";
    export * from "debounce";
    export * from "decimalLength";
    export * from "downloadBlob";
    export * from "downloadFile";
    export * from "each";
    export * from "emptyObject";
    export * from "env";
    export * from "exactMath";
    export * from "file2base64";
    export * from "find";
    export * from "findProps";
    export * from "freezeObj";
    export * from "getDaysByMonth";
    export * from "getInfoByCardNO";
    export * from "getTsByStr";
    export * from "globalThis";
    export * from "hasOwn";
    export * from "hasOwnProperty";
    export * from "hyphenate";
    export * from "imgCompress";
    export * from "isArray";
    export * from "isBigint";
    export * from "isBlob";
    export * from "isBoolean";
    export * from "isComment";
    export * from "isDate";
    export * from "isDefined";
    export * from "isElement";
    export * from "isEmptyValue";
    export * from "isEvenNumber";
    export * from "isFunction";
    export * from "isInteger";
    export * from "isInvalidDate";
    export * from "isJson";
    export * from "isJsonString";
    export * from "isMap";
    export * from "isNaturalNumber";
    export * from "isNull";
    export * from "isNumber";
    export * from "isNumberString";
    export * from "isObject";
    export * from "isOddNumber";
    export * from "isPlainDate";
    export * from "isPlainNumber";
    export * from "isPlainObject";
    export * from "isPlainString";
    export * from "isPositiveInteger";
    export * from "isPrimitive";
    export * from "isPromise";
    export * from "isRegExp";
    export * from "isSameDay";
    export * from "isSameHost";
    export * from "isSameMonth";
    export * from "isSameYear";
    export * from "isSet";
    export * from "isString";
    export * from "isSupportWebp";
    export * from "isSymbol";
    export * from "isText";
    export * from "isUndefined";
    export * from "isWeakMap";
    export * from "isWeakSet";
    export * from "load";
    export * from "mobilePhoneFormat";
    export * from "money2cn";
    export * from "moneyFormat";
    export * from "monthRange";
    export * from "noop";
    export * from "nullProtoObject";
    export * from "objectLength";
    export * from "objectToString";
    export * from "once";
    export * from "padEnd";
    export * from "padStart";
    export * from "percentage";
    export * from "phoneNumFormat";
    export * from "pick";
    export * from "prefix";
    export * from "randomInteger";
    export * from "randomNumber";
    export * from "regexp";
    export * from "remove";
    export * from "removeSpace";
    export * from "script";
    export * from "spliceString";
    export * from "storage";
    export * from "suffix";
    export * from "swap";
    export * from "throttle";
    export * from "toCSSUnit";
    export * from "toDate";
    export * from "toMultiKeyOneValue";
    export * from "toNumber";
    export * from "toRawType";
    export * from "toTypeString";
    export * from "unique";
    export * from "url2http";
    export * from "url2https";
}
