/**
 * 下载blob文件
 * 主要用于下载非同源的文件, 采用XMLHttpRequest blob下载方式下载下来或者下载canvas中的图像
 * @param blob
 * @param filename
 */
export declare const downloadBlob: (blob: Blob, filename: string) => void;
export default downloadBlob;
