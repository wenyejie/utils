import downloadFile from './downloadFile.js'
import isBlob from './isBlob.js'
import suffix from './suffix.js'
import globalThis from './globalThis.js'

/**
 * 下载blob文件
 * 主要用于下载非同源的文件, 采用XMLHttpRequest blob下载方式下载下来或者下载canvas中的图像
 * @param blob
 * @param filename
 */
export const downloadBlob = (blob, filename) => {
  if (!isBlob(blob)) {
    throw new Error('参数错误: blob不是Blob类型')
  }
  if (!suffix(filename)) {
    filename = filename + '.' + blob.type.replace(/image\//, '')
    console.warn('参数错误: filename没有后缀名')
  }
  if (globalThis.navigator.msSaveBlob) {
    globalThis.navigator.msSaveBlob(blob, filename)
    return
  }
  const url = globalThis.URL.createObjectURL(blob)
  downloadFile(url, filename)
  globalThis.URL.revokeObjectURL(url)
}

export default downloadBlob
