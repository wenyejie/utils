/**
 * 通过url下载
 * PS: 只能下载同源的链接, 如果不是同源的文件请使用downloadBlob方法
 * @param url
 * @param filename
 */
export declare const downloadFile: (url: string, filename?: string) => void;
export default downloadFile;
