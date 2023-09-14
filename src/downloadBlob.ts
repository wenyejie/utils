import downloadFile from './downloadFile'
import isBlob from './isBlob'
import suffix from './suffix'
import globalThis from './globalThis'

/**
 * 下载blob文件
 * 主要用于下载非同源的文件, 采用XMLHttpRequest blob下载方式下载下来或者下载canvas中的图像
 * @param blob blob对象
 * @param filename 文件名称
 */
export const downloadBlob = (blob: Blob, filename: string) => {
  if (!isBlob(blob)) {
    console.error(`"${blob}" is not a Blob`)
    return
  }
  if (!suffix(filename)) {
    filename = filename + '.' + blob.type.replace(/image\//, '')
    console.warn('参数错误: filename没有后缀名')
  }
  if (globalThis?.navigator?.['msSaveBlob']) {
    globalThis?.navigator?.['msSaveBlob'](blob, filename)
    return
  }
  const url = globalThis.URL.createObjectURL(blob)
  downloadFile(url, filename)
  globalThis.URL.revokeObjectURL(url)
}

export default downloadBlob
