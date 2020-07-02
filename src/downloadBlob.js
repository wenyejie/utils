import downloadFile from './downloadFile'
import isBlob from './isBlob'
import suffix from './suffix'

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
  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(blob, filename)
    return
  }
  const url = window.URL.createObjectURL(blob)
  downloadFile(url, filename)
  window.URL.revokeObjectURL(url)
}

export default downloadBlob
